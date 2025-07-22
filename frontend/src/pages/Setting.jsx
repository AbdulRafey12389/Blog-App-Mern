import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, LoaderCircle } from 'lucide-react';
import PageTitle from '@/components/PageTitle';
import { useNavigate, useRevalidator } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { editUserProfile } from '@/api/user';
import { toast } from 'sonner';
import { isTokenValid } from '@/utils/checkToken';

export default function Setting() {
  const refInputImage = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { revalidate } = useRevalidator();
  const [allowImageClick, setAllowImageClick] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [isloading2, setIsloading2] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [isDisabled1, setIsDisabled1] = useState(true);
  const [isDisabled2, setIsDisabled2] = useState(true);
  const [previewURL, setPreviewURL] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleOnClick = () => {
    if (allowImageClick) return;
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
      setAllowImageClick(true);
    }
  };

  const handleDeletePreviewImage = () => {
    setPreviewURL(null);
    setSelectedImage(null);
    setAllowImageClick(false);
  };

  useEffect(() => {
    if (!isTokenValid()) {
      navigate('/');
    }

    if (currentUser?.profilePic) {
      refInputImage.current.dis;
      setPreviewURL(currentUser?.profilePic);
    }
  }, []);

  useEffect(() => {
    const isNameEmpty = !name.trim();
    const isUsernameEmpty = !username.trim();
    const isBioEmpty = !bio.trim();

    // Check if any field is empty
    if (isNameEmpty || isUsernameEmpty || isBioEmpty) {
      setIsDisabled1(true);
    } else {
      setIsDisabled1(false);
    }
    // Else, check if any field has changed
    if (name || username || bio || selectedImage) {
      setIsDisabled1(false);
    } else {
      setIsDisabled1(true);
    }

    // Password change logic
    if (oldPassword && newPassword && confirmPassword) {
      setIsDisabled2(false);
    } else {
      setIsDisabled2(true);
    }
  }, [
    currentUser,
    name,
    username,
    bio,
    selectedImage,
    oldPassword,
    newPassword,
    confirmPassword,
  ]);

  const handleSave1 = async () => {
    setIsloading(true);
    setIsDisabled1(true);

    const formData = new FormData();

    formData.append('name', name);
    formData.append('username', username);
    formData.append('bio', bio);
    formData.append('profilePic', selectedImage); // assuming backend expects 'image'

    try {
      const res = await editUserProfile(currentUser?.id, formData);
      console.log(res);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      revalidate();
      toast.success(res.message);

      setIsDisabled1(false);
      setIsloading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error('Upload failed:', error);
      setIsloading(false);
      setIsDisabled1(true);
    }
  };

  const handleSave2 = async () => {
    setIsloading2(true);
    setIsDisabled2(true);

    if (newPassword !== confirmPassword) {
      toast.error('old password or new password must be some.');
      setIsloading2(false);
      return;
    }

    const formData = new FormData();

    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);

    try {
      const res = await editUserProfile(currentUser?.id, formData);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      toast.success('your password updated seccessfully.');

      setIsDisabled2(false);
      setIsloading2(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error('Upload failed:', error);
      setIsloading2(false);
      setIsDisabled2(true);
    }
  };

  return (
    <>
      <PageTitle title='Setting | Edit you profile or your information' />
      <div className=' bg-background text-foreground p-6 pt-0 mb-10 mt-16'>
        <h1 className='text-3xl font-bold mb-6'>Settings</h1>

        {/* Basic Info Section */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle className='text-3xl'>Basic Info</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <Label className='mb-2 block text-lg'>Profile photo</Label>
              <div className='flex items-center justify-between gap-4'>
                <div
                  className='w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center text-muted-foreground'
                  onClick={handleOnClick}
                >
                  {previewURL ? (
                    <img
                      src={previewURL}
                      className='w-full h-full rounded-full object-cover'
                    />
                  ) : (
                    <Upload className='w-6 h-6' />
                  )}
                </div>
                {previewURL && (
                  <Button
                    variant='destructive'
                    size='icon'
                    onClick={handleDeletePreviewImage}
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                )}

                <Input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  ref={refInputImage}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className=''>
              <Label htmlFor='name'>Full name</Label>
              <Input
                id='name'
                className='w-full'
                defaultValue={currentUser?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='username'>Username</Label>
              <Input
                id='username'
                defaultValue={currentUser?.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='bio'>Short bio</Label>
              <Input
                id='bio'
                placeholder='Write a short bio...'
                defaultValue={currentUser?.bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div className='text-right'>
              <Button
                disabled={isDisabled1}
                onClick={handleSave1}
              >
                {isloading ? (
                  <LoaderCircle className='animate-spin' />
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Change Password Section */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Change password</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Input
              placeholder='Old password'
              type='password'
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              placeholder='New password'
              type='password'
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              placeholder='Confirm password'
              type='password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className='text-right'>
              <Button
                disabled={isDisabled2}
                onClick={handleSave2}
              >
                {isloading2 ? (
                  <LoaderCircle className='animate-spin' />
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Delete Account Section */}
        <Card className='bg-destructive/10 border-destructive'>
          <CardHeader>
            <CardTitle className='text-destructive text-3xl'>
              Delete account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground mb-4'>
              Deleting your account will result in the permanent deletion of
              your personal data. This action cannot be undone.
            </p>
            <Button variant='destructive'>Delete Your Account</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
