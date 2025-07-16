// NODE MODULES
import { Link } from 'react-router-dom';

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

export default function SignUp() {
  return (
    <>
      <PageTitle title='Sign up | Create your account' />
      <div className='flex flex-col justify-center md:flex-row min-h-screen'>
        {/* Left side - banner and heading */}
        <div className='md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-background'>
          <div className='space-y-4 text-center flex flex-col items-center '>
            <h1 className='text-3xl md:text-4xl xl:text-6xl font-bold text-primary'>
              Welcome to Our Blog! Platform
            </h1>
            <p className='text-muted-foreground font-bold xl:text-2xl'>
              Create your account and start writing or reading amazing blogs.
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
                  Create
                </h1>{' '}
                <h1 className='inline-block text-3xl md:text-4xl ml-2'>
                  an account
                </h1>
              </CardTitle>
              <CardDescription className='text-center font-semibold text-muted-foreground'>
                Fill the details to register your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' />
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                  />
                </div>
                <div>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type='password'
                  />
                </div>
                <div>
                  <Label htmlFor='confirmPassword'>Confirm Password</Label>
                  <Input
                    id='confirmPassword'
                    type='password'
                  />
                </div>
                <div>
                  <Label htmlFor='role'>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select role' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='user'>User</SelectItem>
                      <SelectItem value='admin'>Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <span className='font-semibold'>SignIn to your account</span>
                  <Link
                    to='/signin'
                    className='ml-2 text-primary hover:underline font-bold'
                  >
                    Click here
                  </Link>
                </div>
                <Button
                  type='submit'
                  className='w-full'
                >
                  Sign Up
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
