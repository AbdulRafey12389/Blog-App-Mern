// controllers/user/bookmarkBlog.js

import User from '../../../models/user.model.js';

const bookmarkBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const userId = req.user.id; // Coming from auth middleware

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const alreadyBookmarked = user.bookmarks.includes(blogId);

    if (alreadyBookmarked) {
      // Unbookmark
      user.bookmarks.pull(blogId);
    } else {
      // Bookmark
      user.bookmarks.push(blogId);
    }

    await user.save();

    res.status(200).json({
      message: alreadyBookmarked
        ? 'Removed from bookmarks'
        : 'Added to bookmarks',
      bookmarked: !alreadyBookmarked,
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default bookmarkBlog;
