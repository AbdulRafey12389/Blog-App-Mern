// CUSTOM MODULES...
import { deleteBlog } from '@/api/blog';
import { BlogCard } from '@/components/BLogCard';
import DeleteBlogDialog from '@/components/DeleteBlogDialog';
import PageTitle from '@/components/PageTitle';

// SHADCN UI
import { Button } from '@/components/ui/button';

// LUCIDE REACT ICONS
import { Bookmark, Heart, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData, useNavigate, useRevalidator } from 'react-router-dom';

export default function BlogDetail() {
  const { blog, authorBlogs } = useLoaderData();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const { revalidate } = useRevalidator();

  const isOwner = currentUser?.id === blog?.author;

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async (blogId) => {
    try {
      setIsloading(true);
      await deleteBlog(blogId);
      setDialogOpen(false);
      setIsloading(false);
      revalidate();
      navigate('/');
      // optionally refresh blogs list
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  return (
    <>
      <PageTitle title='Blogs | Explore the blogs ' />
      <div className='mx-auto p-6 mb-10 mt-12'>
        {/* Header with author info */}
        <div className='w-full h-[400px] rounded-lg'>
          <img
            src={blog?.coverImage}
            alt={blog?.title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* Blog content */}
        <div className='prose prose-invert max-w-none mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-4xl mt-4 ml-2 font-bold text-primary mb-4 capitalize'>
              {blog?.title}
            </h1>
            <p className='text-lg mb-6 ml-2 font-semibold '>{blog?.content}</p>
          </div>

          {/* Edit/Delete buttons (for author) */}
          {isOwner && (
            <div>
              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  className='gap-1'
                >
                  <Edit className='h-4 w-4' />
                  Edit
                </Button>
                <Button
                  variant='destructive'
                  size='sm'
                  className='gap-1'
                  onClick={() => {
                    setSelectedBlog(blog);
                    setDialogOpen(true);
                  }}
                >
                  <Trash2 className='h-4 w-4' />
                  Delete
                </Button>
                <DeleteBlogDialog
                  open={dialogOpen}
                  onOpenChange={setDialogOpen}
                  blog={selectedBlog}
                  onConfirm={handleDelete}
                  isloading={isloading}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer with actions */}
        <div className='flex max-w-max mx-auto items-center pb-6 px-2 rounded-3xl justify-center border-2 border-border pt-6 hover:bg-zinc-900 transition-colors'>
          <div className='flex items-center gap-2  '>
            <Button
              variant='ghost'
              size='sm'
              className='gap-1'
            >
              <Heart className='h-4 w-4' />
              <span>0 Reactions</span>
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='gap-1'
            >
              <Bookmark className='h-4 w-4' />
              <span>0 Bookmarks</span>
            </Button>
          </div>
        </div>

        {/* Author info at bottom */}
        <div>
          <h2 className='text-2xl font-semibold mb-4 border-b pb-4'>
            Reading next
          </h2>
          <div className='w-full grid gap-6 px-4 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
            {authorBlogs.map(
              ({
                title,
                content,
                author: { name, profilePic },
                createdAt,
                _id,
              }) => (
                <BlogCard
                  key={_id}
                  title={title}
                  blogId={_id}
                  author={name}
                  profilePic={profilePic}
                  createdAt={createdAt}
                  content={content}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
