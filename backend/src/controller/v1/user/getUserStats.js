// controllers/user/getUserStats.js

import Blog from '../../../models/blog.model.js';
import User from '../../../models/user.model.js';

const getUserStats = async (req, res) => {
  try {
    const userId = req.user.id; // via auth middleware

    // Total posts by user
    const totalPosts = await Blog.countDocuments({ author: userId });

    // Total private posts
    const totalPrivatePosts = await Blog.countDocuments({
      author: userId,
      isPublic: false,
    });

    // Total likes received on all user blogs
    const userBlogs = await Blog.find({ author: userId }, 'likes');
    const totalLikes = userBlogs.reduce(
      (acc, blog) => acc + blog.likes.length,
      0,
    );

    // Total bookmarks (blogs user bookmarked)
    const user = await User.findById(userId, 'bookmarks');
    const totalBookmarks = user?.bookmarks?.length || 0;

    res.status(200).json({
      totalPosts,
      totalPrivatePosts,
      totalBookmarks,
      totalLikes,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getUserStats;
