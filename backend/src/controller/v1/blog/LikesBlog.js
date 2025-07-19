import Blog from '../../../models/blog.model.js';

const likeBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const userId = req.user.id; // assumes you're using auth middleware that adds req.user

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const alreadyLiked = blog.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      blog.likes.pull(userId);
    } else {
      // Like
      blog.likes.push(userId);
    }

    // Update likesCount field
    blog.likesCount = blog.likes.length;

    await blog.save();

    res.status(200).json({
      message: alreadyLiked ? 'Blog unliked' : 'Blog liked',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default likeBlog;
