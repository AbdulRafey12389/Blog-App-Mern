// NODE MODULES

// SHADCN UI IMPORTS
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// LUCIDE REACTS ICONS
import {
  BarChart,
  Heart,
  BookmarkCheck,
  EyeOff,
  MoreVertical,
  Edit,
  Trash2,
  LoaderCircle,
} from 'lucide-react';

// CUSTOM COMPONENTS...
// import { BlogCard } from '@/components/BLogCard';
import PageTitle from '@/components/PageTitle';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogsByAuthor, getPrivateBlogs, getPublicBlogs } from '@/api/blog';
import { BlogCard } from '@/components/BLogCard';
import { isTokenValid } from '@/utils/checkToken';

export default function Dashboard() {
  const [selectedValue, setIsSelectedValue] = useState('all');
  const [isCurrentBlogs, setIsCurrentBlogs] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  if (!isTokenValid()) {
    navigate('/');
  }

  const userStats = useLoaderData();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    (async () => {
      try {
        if (selectedValue === 'all') {
          setIsloading(true);
          const res = await getBlogsByAuthor(currentUser?.id);
          setIsCurrentBlogs(res);
          setIsloading(false);
        } else if (selectedValue === 'public') {
          setIsloading(true);
          const res = await getPublicBlogs();
          const myPublicBlogs = res.filter(
            (blog) => blog?.author?._id === currentUser?.id,
          );
          setIsCurrentBlogs(myPublicBlogs);
          setIsloading(false);
        } else {
          setIsloading(true);
          const res = await getPrivateBlogs();
          setIsCurrentBlogs(res);
          setIsloading(false);
        }
      } catch (error) {
        console.log(error);
        setIsCurrentBlogs(null);
        setIsloading(false);
      }
    })();
  }, [selectedValue]);

  return (
    <>
      <PageTitle title='Dashboard | Manage your data' />
      <div className='p-6 bg-background text-foreground mt-12 mb-12'>
        {/* Header */}
        <div className='mb-6 flex md:flex-row flex-col items-center justify-between rounded-md border-b border-border px-6 py-4'>
          <h1 className='text-3xl font-bold text-primary'>Dashboard</h1>
          <p className='text-muted-foreground font-bold mr-2 text-2xl'>
            Welcome back,{' '}
            <span className='font-semibold text-foreground'>Abdul Rafey</span>
          </p>
        </div>

        {/* Summary Boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <BarChart className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-semibold text-muted-foreground'>
                  Total Blogs
                </p>
                <p className='text-xl font-bold '>{userStats?.totalPosts}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <BookmarkCheck className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-semibold text-muted-foreground'>
                  BookMarks
                </p>
                <p className='text-xl font-bold'>{userStats?.totalBookmarks}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <Heart className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-semibold text-muted-foreground'>
                  Likes
                </p>
                <p className='text-xl font-bold'>{userStats?.totalLikes}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <EyeOff className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-semibold text-muted-foreground'>
                  Private Posts
                </p>
                <p className='text-xl font-bold'>
                  {userStats?.totalPrivatePosts}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className='flex items-center justify-between mb-10 mt-8'>
          <Label
            htmlFor='filter'
            className='text-2xl'
          >
            Filter your blogs:
          </Label>
          <Select
            value={selectedValue}
            onValueChange={setIsSelectedValue}
          >
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='public'>Public</SelectItem>
              <SelectItem value='private'>Private</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Blog Cards */}
        <div className='w-full grid gap-6 px-4 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
          {isCurrentBlogs?.length === 0 ? (
            <p className='text-center font-bold'>
              You have created blogs yets...
            </p>
          ) : isLoading ? (
            <LoaderCircle className='h-28 w-28 text-primary text-center animate-spin mx-auto' />
          ) : (
            isCurrentBlogs?.map(
              ({
                title,
                _id,
                createdAt,
                author,
                content,
                likes,
                likesCount,
              }) => (
                <BlogCard
                  key={_id}
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
            )
          )}

          {/* <BlogCard
            title='JET LI'
            subtitle='LEAGUE OF GODS'
            author='Emily'
            date='May 26, 25'
            readTime='2 min read'
            reactions={2}
            bookmarks={2}
          /> */}
        </div>
      </div>
    </>
  );
}
