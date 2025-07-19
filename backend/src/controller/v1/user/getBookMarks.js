// controllers/user/getBookmarks.js

import User from '../../../models/user.model.js';

const getBookmarks = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware

    console.log(userId);

    const user = await User.findById(userId).populate({
      path: 'bookmarks',
      select: 'title coverImage likes likesCount author createdAt content', // include only needed fields
      populate: {
        path: 'author',
        select: 'name profilePic bookmarks', // populate author info too
      },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ bookmarks: user.bookmarks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getBookmarks;
