import Blog from '../../../models/blog.model.js';

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getBlogById;
