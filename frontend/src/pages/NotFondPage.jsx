// src/pages/NotFound.jsx

import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
      <div className='text-center max-w-md'>
        <div className='flex justify-center mb-4'>
          <Ghost className='h-12 w-12 text-muted-foreground' />
        </div>
        <h1 className='text-4xl font-bold tracking-tight text-foreground mb-2'>
          404 - Page Not Found
        </h1>
        <p className='text-muted-foreground mb-6'>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Button
          className='rounded-xl'
          onClick={() => navigate('/')}
          variant='default'
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
