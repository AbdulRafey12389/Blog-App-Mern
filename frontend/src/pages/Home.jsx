// CUSTOM COMPONENTS...
import { BlogCard } from '@/components/BLogCard';
import PageTitle from '@/components/PageTitle';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { publicBlogs } = useOutletContext();

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
          {publicBlogs &&
            publicBlogs.map(
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
                  profilePic={author?.profilePic}
                  createdAt={createdAt}
                  content={content}
                  likes={likes}
                  reactions={likesCount}
                />
              ),
            )}
        </div>
      </section>
    </>
  );
}
