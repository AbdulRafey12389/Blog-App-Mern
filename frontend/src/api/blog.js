// src/api/blog.js
import axiosInstance from '@/api/axios';

export const createBlog = async (blogData) => {
  const response = await axiosInstance.post('/blogs/create', blogData, {
    headers: {
      'Content-Type': 'multipart/form-data', // ✅ Let the browser set it
    },
  });
  return response.data;
};

export const getBlogById = async (blogId) => {
  const response = await axiosInstance.get(`blogs/${blogId}`);
  return response.data;
};

export const getBlogsByAuthor = async (authorId) => {
  const response = await axiosInstance.get(`blogs/userId/${authorId}`);
  return response.data;
};

export const getPublicBlogs = async () => {
  const response = await axiosInstance.get('blogs/public');
  return response.data;
};

export const getPrivateBlogs = async () => {
  const response = await axiosInstance.get('blogs/private');
  return response.data;
};

export const updateBlog = async (blogId, updatedData) => {
  const response = await axiosInstance.put(
    `/blogs/edit/${blogId}`,
    updatedData,
    {
      headers: {
        'Content-Type': 'multipart/form-data', // ✅ Let the browser set it
      },
    },
  );
  return response.data;
};

export const likesBlogs = async (blogId) => {
  const response = await axiosInstance.put(`blogs/likes/${blogId}`);
  return response.data;
};

export const deleteBlog = async (blogId) => {
  const response = await axiosInstance.delete(`blogs/delete/${blogId}`);
  return response.data;
};
