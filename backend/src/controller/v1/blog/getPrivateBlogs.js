import Blog from '../../../models/blog.model.js';

const getPrivateBlogs = async (req, res) => {
  try {
    const userId = req.user.id; // from protect middleware
    const userRole = req.user.role;

    let blogs;

    if (userRole === 'admin') {
      blogs = await Blog.find({ isPublic: false }).populate(
        'author',
        'name profilePic bookmarks',
      );
    } else {
      blogs = await Blog.find({ isPublic: false, author: userId }).populate(
        'author',
        'name profilePic bookmarks',
      );
    }

    if (!blogs) {
      res.status(404).json({ message: 'there is no private blogs' });
    }

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getPrivateBlogs;
