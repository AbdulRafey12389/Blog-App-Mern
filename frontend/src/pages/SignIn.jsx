// NODE MODULES
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

// SHADCN UI IMPORTS
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// CUSTOM COMPONENTS...
import PageTitle from '@/components/PageTitle';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

export default function SignIn() {
  const actionData = useActionData();
  const [role, setRole] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (actionData) {
      setError(actionData);
    }
  }, [actionData]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
      <PageTitle title='Sign in | Sign in to your account' />
      <div className='flex flex-col justify-center md:flex-row min-h-screen'>
        {/* Left side - banner and heading */}
        <div className='md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-background'>
          <div className='space-y-4 text-center flex flex-col items-center '>
            <h1 className='text-3xl md:text-4xl xl:text-6xl font-bold text-primary'>
              Welcome Back!
            </h1>
            <p className='text-muted-foreground font-bold xl:text-2xl'>
              Sign in to continue blogging and exploring amazing content.
            </p>
            <img
              src='/banner.png'
              alt='Blog Banner'
              className='md:block hidden w-[50vw] rounded-xl shadow'
            />
          </div>
        </div>

        {/* Right side - registration form */}
        <div className='md:w-1/2 flex items-center justify-center md:p-6 md:bg-accent'>
          <Card className='w-full md:max-w-md xl:max-w-[35rem] shadow-lg '>
            <CardHeader>
              <CardTitle className='text-center'>
                <h1 className='text-3xl md:text-4xl text-primary inline-block'>
                  Sign
                </h1>{' '}
                <h1 className='inline-block text-3xl md:text-4xl ml-2'>In</h1>
              </CardTitle>
              <CardDescription className='text-center font-semibold text-muted-foreground'>
                Enter your credentials to login
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form
                className='space-y-4'
                action='/signin'
                method='POST'
              >
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    name='email'
                  />
                </div>
                <div>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type='password'
                    name='password'
                  />
                </div>
                <div>
                  <Label htmlFor='role'>Role</Label>
                  <Select
                    value={role}
                    onValueChange={setRole}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select role' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='user'>User</SelectItem>
                      <SelectItem value='admin'>Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type='hidden'
                    name='role'
                    value={role}
                  />
                </div>

                <div>
                  <span className='font-semibold'>Don't have an account?</span>
                  <Link
                    to='/signup'
                    className='ml-2 text-primary hover:underline font-bold'
                  >
                    Click here
                  </Link>
                </div>
                <Button
                  type='submit'
                  className='w-full'
                  disabled={navigation.state !== 'idle'}
                >
                  {navigation.state !== 'idle' ? (
                    <LoaderCircle className='white h-24 w-24 animate-spin' />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
