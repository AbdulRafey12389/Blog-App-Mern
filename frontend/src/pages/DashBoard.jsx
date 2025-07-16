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
} from 'lucide-react';

// CUSTOM COMPONENTS...
import { BlogCard } from '@/components/BLogCard';
import PageTitle from '@/components/PageTitle';

export default function Dashboard() {
  // const stats = [
  //   { label: 'Total Posts', value: 12 },
  //   { label: 'Whitelisted', value: 5 },
  //   { label: 'Liked Posts', value: 8 },
  //   { label: 'Private Posts', value: 3 },
  // ];

  return (
    <>
      <PageTitle title='Dashboard | Manage your data' />
      <div className='p-6 bg-background text-foreground mt-12'>
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
                  Total Posts
                </p>
                <p className='text-xl font-bold '>18</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='flex items-center gap-4 py-6'>
              <BookmarkCheck className='w-8 h-8 text-primary' />
              <div>
                <p className='text-lg font-semibold text-muted-foreground'>
                  Readlist
                </p>
                <p className='text-xl font-bold'>10</p>
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
                <p className='text-xl font-bold'>52</p>
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
                <p className='text-xl font-bold'>5</p>
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
          <Select>
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
    </>
  );
}
