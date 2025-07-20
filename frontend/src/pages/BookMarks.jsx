// src/pages/BookmarkPage.jsx

import { BlogCard } from '@/components/BLogCard';
import { isTokenValid } from '@/utils/checkToken';
import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import BlogCard from '@/components/BlogCard'; // or whatever you use for blog display

const BookMarks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid()) {
      navigate('/');
      return;
    }
  }, [navigate]);

  const { bookmarks } = useLoaderData() || {};

  return (
    <div className='p-6 space-y-4 mt-12 mb-14'>
      <h1 className='text-3xl font-bold'> Your Bookmarked Blogs</h1>

      <div className='w-full grid gap-6 px-4 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
        {bookmarks &&
          bookmarks.map(
            ({
              title,
              coverImage,
              _id,
              createdAt,
              author,
              content,
              likes,
              likesCount,
            }) => (
              <BlogCard
                key={_id}
                imgSrc={coverImage}
                title={title}
                blogId={_id}
                author={author?.name}
                bookmarks={author.bookmarks}
                profilePic={author?.profilePic}
                createdAt={createdAt}
                content={content}
                likes={likes}
                reactions={likesCount}
              />
            ),
          )}
      </div>
    </div>
  );
};

export default BookMarks;
