// controllers/blogController.js
import Blog from '../../../models/blog.model.js';

const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Optional: Check if the logged-in user is the blog author
    if (blog.author.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: 'Not authorized to delete this blog' });
    }

    await blog.deleteOne();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default deleteBlogById;
