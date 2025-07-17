import { getPublicBlogs } from '@/api/blog';

const getAllPbulicBlogLoaderFunction = async () => {
  try {
    const res = await getPublicBlogs();
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export default getAllPbulicBlogLoaderFunction;
