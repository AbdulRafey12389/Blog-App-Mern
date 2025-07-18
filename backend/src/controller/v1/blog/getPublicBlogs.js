import { connectToDatabase } from '../../../config/db.js';
import Blog from '../../../models/blog.model.js';

const getPublicBlogs = async (req, res) => {
  // await connectToDatabase();
  try {
    const blogs = await Blog.find({ isPublic: true }).populate({
      path: 'author',
      select: 'name profilePic',
    });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getPublicBlogs;
