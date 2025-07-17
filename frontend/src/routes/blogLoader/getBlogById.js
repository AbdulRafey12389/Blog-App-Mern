import { getBlogById, getBlogsByAuthor } from '@/api/blog';

const getBlogByIdLoaderFunction = async ({ params }) => {
  const { blogId } = params;

  try {
    const res = await getBlogById(blogId);
    const authorBlogs = await getBlogsByAuthor(res.author);
    return { blog: res, authorBlogs };
  } catch (error) {
    console.error(error);
  }
};

export default getBlogByIdLoaderFunction;
