import { getBookmarksBlogs } from '@/api/user';

const getBookMarksLoaderFunction = async () => {
  try {
    const res = await getBookmarksBlogs();

    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
  }
};

export default getBookMarksLoaderFunction;
