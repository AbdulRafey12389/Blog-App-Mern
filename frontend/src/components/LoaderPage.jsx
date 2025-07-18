import { Loader2 } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className='flex items-center justify-center h-screen bg-background text-foreground transition-colors duration-300'>
      <div className='flex flex-col items-center gap-4'>
        <Loader2 className='w-10 h-10 animate-spin text-primary' />
        <p className='text-lg font-medium'>Loading, please wait...</p>
      </div>
    </div>
  );
}
