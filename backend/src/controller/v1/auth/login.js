import User from '../../../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// 🔐 Static list of approved admin emails
const adminEmails = ['abdulrafey12389@gmail.com', 'codewithrafey12389@gmail.com'];

const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Validate role
    if (role === 'admin' && !adminEmails.includes(email)) {
      return res
        .status(403)
        .json({ message: 'This email is not allowed to loggedIn as admin' });
    }

    // 4. Generate token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1w' },
    );

    // 5. Respond
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default login;
