import Blog from '../../../models/blog.model.js';

const getBlogsByAuthor = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.params.userId }).populate({
      path: 'author',
      select: 'name profilePic',
    });

    if (!blogs) return res.status(404).json({ message: 'Blog not found' });

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getBlogsByAuthor;
