import Blog from "../../../models/blog.model.js";

const getPublicBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublic: true });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getPublicBlogs
