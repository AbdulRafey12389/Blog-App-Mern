// CUSTOM COMPONENTS...
import { BlogCard } from '@/components/BLogCard';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle title='Home | Explore our blog app' />
      <section className='text-center w-full mx-auto space-y-4 mt-16 mb-12'>
        <h1 className='text-4xl font-bold text-primary'>
          Explore Thoughtful Stories & Insights
        </h1>
        <p className='text-muted-foreground'>
          Dive into a world of creative writing, developer tips, and inspiring
          articles shared by our passionate blogging community.
        </p>

        <div className='w-full grid gap-6 px-4 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
          <BlogCard
            imgSrc='https://images.pexels.com/photos/28055673/pexels-photo-28055673.jpeg'
            title='JET LI'
            subtitle='LEAGUE OF GODS'
            author='Emily'
            date='May 26, 25'
            readTime='2 min read'
            reactions={2}
            bookmarks={2}
          />
          <BlogCard
            imgSrc='https://images.pexels.com/photos/28055673/pexels-photo-28055673.jpeg'
            title='JET LI'
            subtitle='LEAGUE OF GODS'
            author='Emily'
            date='May 26, 25'
            readTime='2 min read'
            reactions={2}
            bookmarks={2}
          />
        </div>
      </section>
    </>
  );
}
