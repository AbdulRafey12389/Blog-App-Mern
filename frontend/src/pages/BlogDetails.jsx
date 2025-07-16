// CUSTOM MODULES...
import { BlogCard } from '@/components/BLogCard';

// SHADCN UI
import { Button } from '@/components/ui/button';

// LUCIDE REACT ICONS
import { Bookmark, Heart, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogDetail() {
  return (
    <>
      <PageTitle title='Blogs | Explore the blogs ' />
      <div className='mx-auto p-6 mb-10 mt-12'>
        {/* Header with author info */}
        <div className='w-full h-[400px] rounded-lg'>
          <img
            src='https://images.pexels.com/photos/32437900/pexels-photo-32437900.jpeg'
            alt=''
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* Blog content */}
        <div className='prose prose-invert max-w-none mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-4xl mt-4 ml-2 font-bold text-primary mb-4 capitalize'>
              nice
            </h1>
            <p className='text-lg mb-6 ml-2 font-semibold '>hello</p>
          </div>

          {/* Edit/Delete buttons (for author) */}
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
              >
                <Trash2 className='h-4 w-4' />
                Delete
              </Button>
            </div>
          </div>
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
            <BlogCard
              title='JET LI'
              subtitle='LEAGUE OF GODS'
              author='Emily'
              date='May 26, 25'
              readTime='2 min read'
              reactions={2}
              bookmarks={2}
            />
            <BlogCard
              title='JET LI'
              subtitle='LEAGUE OF GODS'
              author='Emily'
              date='May 26, 25'
              readTime='2 min read'
              reactions={2}
              bookmarks={2}
            />
          </div>
        </div>
      </div>
    </>
  );
}
