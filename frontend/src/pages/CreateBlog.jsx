import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { UploadCloud } from 'lucide-react';

export default function CreateBlog() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <>
      <PageTitle title='Create - Blog | Create your onw blog to see people' />
      <div className='p-6 bg-background text-foreground mt-14 mb-12'>
        <h1 className='text-3xl font-bold mb-6 ml-[8.8rem]'>Create Blog</h1>

        <Card className='max-w-4xl mx-auto'>
          <CardHeader>
            <CardTitle>Upload Blog Banner</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <div className='border border-dashed rounded-lg p-6 flex flex-col items-center text-center'>
              <UploadCloud className='w-10 h-10 text-muted-foreground mb-2' />
              <Button
                variant='secondary'
                className='mb-2'
              >
                Upload Image
              </Button>
              <p className='text-sm text-muted-foreground'>
                Use a ratio of 21:9 for best results. <br /> Only JPEG and PNG
                with max size of 5MB
              </p>
            </div>

            <div>
              <Input
                placeholder='Article Title...'
                className='text-2xl font-mono'
              />
            </div>

            <div>
              <Textarea
                placeholder='Write Your Post Content Here...'
                className='min-h-[150px]'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Label htmlFor='visibility'>Make Public</Label>
                <Switch
                  id='visibility'
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                />
              </div>
              <Button>Publish</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
