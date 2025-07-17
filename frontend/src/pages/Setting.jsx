import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, Trash2 } from 'lucide-react';
import PageTitle from '@/components/PageTitle';

export default function Setting() {
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
              <div className='flex items-center gap-4'>
                <div className='w-32 h-32 rounded-full border border-dashed flex items-center justify-center text-muted-foreground'>
                  <Upload className='w-6 h-6' />
                </div>
                <Button
                  variant='destructive'
                  size='icon'
                >
                  <Trash2 className='w-4 h-4' />
                </Button>
              </div>
            </div>

            <div className=''>
              <Label htmlFor='name'>Full name</Label>
              <Input
                id='name'
                defaultValue='abdul rafey'
                className='w-full'
              />
            </div>
            <div>
              <Label htmlFor='username'>Username</Label>
              <Input
                id='username'
                defaultValue='abdulrafey-1752610191527'
              />
            </div>
            <div>
              <Label htmlFor='bio'>Short bio</Label>
              <Input
                id='bio'
                placeholder='Write a short bio...'
              />
            </div>

            <div className='text-right'>
              <Button>Save Changes</Button>
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
            />
            <Input
              placeholder='New password'
              type='password'
            />
            <Input
              placeholder='Confirm password'
              type='password'
            />
            <div className='text-right'>
              <Button>Save Changes</Button>
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
