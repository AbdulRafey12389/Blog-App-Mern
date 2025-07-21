import jwt from 'jsonwebtoken';
import User from '../../../models/user.model.js';
import Otp from '../../../models/otp.model.js';

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    // ✅ Mark user as verified
    const user = await User.findOneAndUpdate(
      { email },
      { isVerified: true },
      { new: true },
    );

    // ✅ Remove used OTP
    await Otp.deleteMany({ email });

    // ✅ Generate access token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1w' },
    );

    return res.status(200).json({
      message: 'Email verified successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        bio: user.bio,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        profilePic: user.profilePic,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'OTP verification failed', error: err.message });
  }
};

export default verifyOtp;
