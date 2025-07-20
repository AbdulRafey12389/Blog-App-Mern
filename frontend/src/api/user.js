import axiosInstance from './axios';

export const bookMarksBlogs = async (blogId) => {
  const response = await axiosInstance.put(`users/bookmarks/${blogId}`);
  return response.data;
};

export const getUserById = async (userId) => {
  const response = await axiosInstance.get(`users/${userId}`);
  return response.data;
};

export const getBookmarksBlogs = async () => {
  const response = await axiosInstance.get(`users/bookmarks`);
  return response.data;
};

export const getUserStats = async () => {
  const response = await axiosInstance.get(`users/stats`);
  return response.data;
};

export const editUserProfile = async (userId, userData) => {
  const response = await axiosInstance.put(`users/edit/${userId}`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
