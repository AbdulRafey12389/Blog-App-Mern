import bcrypt from 'bcryptjs';
import User from '../../../models/user.model.js';

// ✅ Edit user profile (only the owner)
const editUserProfile = async (req, res) => {
  const { name, username, bio, oldPassword, newPassword } = req.body;
  try {
    const userId = req.params.id;

    if (req.user.id !== userId) {
      return res
        .status(403)
        .json({ message: 'You can only update your own profile' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (username) user.username = username;
    if (bio) user.bio = bio;

    if (req.file) {
      user.profilePic = req.file.path; // Cloudinary secure URL
    }

    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch)
        return res.status(400).json({ message: 'Old password is incorrect' });

      user.password = newPassword;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        profilePic: updatedUser.profilePic,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Profile update failed' });
  }
};

export default editUserProfile;
