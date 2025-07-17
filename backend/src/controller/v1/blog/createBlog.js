import Blog from '../../../models/blog.model.js'


const createBlog = async (req, res) => {
  try {
    const { title, content, isPublic } = req.body;

    const blog = await Blog.create({
      title,
      content,
      isPublic,
      coverImage: req.file ? req.file.path : '',
      author: req.user.id, // assuming protect middleware sets req.user
    });

    res.status(201).json({ message: 'Blog created', blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default createBlog