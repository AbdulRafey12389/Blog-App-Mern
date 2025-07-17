import Blog from '../../../models/blog.model.js';

const updateBlog = async (req, res) => {
  try {
    const { title, content, isPublic } = req.body;

    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user.id)
      return res
        .status(403)
        .json({ message: 'Not authorized - you cannot delete this post' });

    if (title) blog.title = title;
    if (content) blog.content = content;
    if (isPublic) blog.isPublic = isPublic;

    if (req.file) blog.coverImage = req.file.path;

    const updated = await blog.save();
    res.status(200).json({ message: 'Blog updated', blog: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default updateBlog;
