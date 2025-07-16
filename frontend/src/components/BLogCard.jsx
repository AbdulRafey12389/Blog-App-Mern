// components/ui/BlogCard.js
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bookmark, Heart } from 'lucide-react';

export function BlogCard({
  imgSrc,
  title,
  author,
  date,
  readTime,
  reactions,
  bookmarks,
}) {
  return (
    <Card
      className={`w-full ${imgSrc ? 'md:w-[350px]' : 'w-full'}  max-h-max bg-card text-card-foreground hover:bg-zinc-900 transition-colors  mb-4`}
    >
      {imgSrc && (
        <div className='w-full h-[200px] rounded-md'>
          <img
            src={imgSrc}
            alt=''
            className='w-full h-full rounded-md'
          />
        </div>
      )}

      <CardHeader className='md:flex-row justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Avatar>
            <AvatarImage src={imgSrc} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-md text-start font-semibold'>{author}</p>
            <p className='text-sm font-medium text-muted-foreground'>{date}</p>
          </div>
        </div>
        <div>
          <p className='text-sm font-medium text-muted-foreground'>
            {readTime}
          </p>
        </div>
      </CardHeader>
      <CardContent className='flex items-center gap-4'>
        {' '}
        <CardTitle className='text-white font-bold text-center w-full md:text-start text-2xl ml-2'>
          {title}
        </CardTitle>
      </CardContent>
      <CardFooter className=' border-t-2 border-t-muted flex-row items-center justify-center '>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <Button
            variant='ghost'
            size='lg'
            className='gap-1 w-8 h-8 rounded-full'
          >
            <Heart className='h-4 w-4' />
            <span>{reactions}</span>
          </Button>
          <Button
            variant='ghost'
            size='lg'
            className='gap-1  w-8 h-8 rounded-full'
          >
            <Bookmark className='h-4 w-4' />
            <span>{bookmarks}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
