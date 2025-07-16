// NODE MODULES...
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

// SHADCN UI IMPORTS
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// ICONS
import { LogOut, LayoutDashboard, User, Pencil } from 'lucide-react';
import Footer from './components/Footer';

// CUSTOM COMPONENTS...
import PageTitle from './components/PageTitle';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <PageTitle title='Home | Explore our blog app' />
      <div className='min-h-screen bg-background text-foreground'>
        {/* Navbar */}
        <nav className='fixed top-0 w-full backdrop-blur-md bg-muted/70 border-b border-border px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-[50px] h-[50px] rounded-md'>
              <Link to='/'>
                <img
                  src='/logo.png'
                  alt='blogify'
                  className='w-full h-full rounded-md'
                />
              </Link>
            </div>
            <div className='text-xl hidden sm:block font-bold text-primary'>
              Blogify
            </div>
          </div>

          {/* Right - Avatar Dropdown */}
          <div className='flex items-center gap-6'>
            {location.pathname !== '/createblog' && (
              <Button
                className='rounded-2xl'
                onClick={() => navigate('/createblog')}
              >
                <Pencil /> Write
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='User'
                  />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-48 mt-2 mr-12'>
                <Link to={'/dashboard'}>
                  <DropdownMenuItem>
                    <LayoutDashboard className='mr-2 h-4 w-4 text-primary' />{' '}
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <Link to={'/setting'}>
                  <DropdownMenuItem>
                    <User className='mr-2 h-4 w-4 text-primary' /> Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <LogOut className='mr-2 h-4 w-4 text-red-600' /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Main Content */}
        <main className='px-6 py-10 space-y-8'>
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
