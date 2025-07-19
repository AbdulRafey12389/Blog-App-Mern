import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { LoaderCircle, Trash2, UploadCloud } from 'lucide-react';
import PageTitle from '@/components/PageTitle';
import { toast } from 'sonner';
import { createBlog, updateBlog } from '@/api/blog';
import { useNavigate, useRevalidator, useLocation } from 'react-router-dom';

export default function CreateAndUpdateBlog() {
  const [isPublic, setIsPublic] = useState(true);
  const refInputImage = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [previewURL, setPreviewURL] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { revalidate } = useRevalidator();
  const { state, pathname } = useLocation();
  const isEditPage = pathname.startsWith('/edit');

  useEffect(() => {
    if (isEditPage && state?.blog) {
      const blog = state.blog;
      setTitle(blog.title || '');
      setContent(blog.content || '');
      setIsPublic(blog.isPublic ?? true);
      setSelectedImage(blog.coverImage || null);
      setPreviewURL(blog.coverImage || null);
    } else {
      // Clear all fields if not on edit page or no blog in state
      setTitle('');
      setContent('');
      setIsPublic(true);
      setSelectedImage(null);
      setPreviewURL(null);
    }
  }, [state, pathname, isEditPage]);

  console.log(state);

  const handleOnClick = () => {
    if (refInputImage.current) {
      refInputImage.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // For preview:
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleDeletePreviewImage = () => {
    setPreviewURL(null);
    setSelectedImage(null);
  };

  const handleSubmit = async () => {
    setIsloading(true);

    if (!selectedImage) {
      toast.error('Cover Image is required');
      setIsloading(false);
      return;
    }

    if (!title.trim()) {
      toast.error('Title is required.');
      setIsloading(false);
      return;
    }

    if (!content.trim()) {
      toast.error('Content is required.');
      setIsloading(false);
      return;
    }

    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('isPublic', isPublic);
    formData.append('coverImage', selectedImage); // assuming backend expects 'image'

    try {
      const res = await createBlog(formData);
      revalidate();
      navigate(`/blogs/${res.blog._id}`);
      setIsloading(false);
    } catch (error) {
      toast.error(error.message);
      console.error('Upload failed:', error);
      setIsloading(false);
    }
  };

  const handleEditButton = async () => {
    setIsloading(true);

    if (!selectedImage) {
      toast.error('Cover Image is required');
      setIsloading(false);
      return;
    }

    if (!title.trim()) {
      toast.error('Title is required.');
      setIsloading(false);
      return;
    }

    if (!content.trim()) {
      toast.error('Content is required.');
      setIsloading(false);
      return;
    }

    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('isPublic', isPublic); // convert boolean to string
    formData.append('coverImage', selectedImage); // assuming backend expects 'image'

    try {
      const res = await updateBlog(state.blog._id, formData);
      revalidate();
      navigate(`/blogs/${res.blog._id}`);
      setIsloading(false);
    } catch (error) {
      toast.error(error.message);
      console.error('Upload failed:', error);
      setIsloading(false);
    }
  };

  return (
    <>
      <PageTitle title='Create - Blog | Create your onw blog to see people' />
      <div className='p-6 bg-background text-foreground mt-14 mb-12 flex items-start flex-col'>
        <h1 className='text-3xl font-bold mb-6 w-[63%] mx-auto'>
          {state?.blog ? 'Update' : 'Create'} Blog
        </h1>
        <div className='w-full'>
          <Card className='max-w-4xl mx-auto'>
            <CardHeader>
              <CardTitle>Upload Blog Banner</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='border border-dashed rounded-lg p-6 relative'>
                {previewURL && (
                  <Button
                    variant=''
                    className='absolute right-10 top-10 rounded-full'
                    size='icon'
                    onClick={handleDeletePreviewImage}
                  >
                    <Trash2 />
                  </Button>
                )}

                {previewURL ? (
                  <img
                    src={previewURL}
                    alt={previewURL}
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='flex flex-col items-center text-center'>
                    <UploadCloud className='w-10 h-10 text-muted-foreground mb-2' />
                    <Button
                      variant='secondary'
                      className='mb-2'
                      onClick={handleOnClick}
                    >
                      Upload Image
                    </Button>
                    <Input
                      type='file'
                      accept='image/*'
                      ref={refInputImage}
                      onChange={handleFileChange}
                      className='hidden'
                    />
                    <p className='text-sm text-muted-foreground'>
                      Use a ratio of 21:9 for best results. <br /> Only JPEG and
                      PNG with max size of 5MB
                    </p>
                  </div>
                )}
              </div>

              <div>
                <Input
                  placeholder='Article Title...'
                  className='text-2xl font-mono'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <Textarea
                  placeholder='Write Your Post Content Here...'
                  className='min-h-[150px]'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
                <Button
                  onClick={state?.blog ? handleEditButton : handleSubmit}
                  disabled={isloading}
                >
                  {isloading ? (
                    <LoaderCircle className='animate-spin' />
                  ) : isEditPage ? (
                    'Update'
                  ) : (
                    'Publish'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
