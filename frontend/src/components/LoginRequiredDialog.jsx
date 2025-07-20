// components/LoginRequiredDialog.jsx

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function LoginRequiredDialog({ open, setOpen }) {
  const navigate = useNavigate();

  // const handleClose = () => setOpen(false);
  const goToSignIn = () => {
    setOpen(false);
    navigate('/signin');
  };
  const goToSignUp = () => {
    setOpen(false);
    navigate('/signup');
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className='max-w-md rounded-2xl shadow-xl bg-background'>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold'>Hold on!</DialogTitle>
          <DialogDescription className='text-muted-foreground font-bold'>
            You need to sign in before you can like this blog.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='gap-2 sm:justify-end'>
          <Button
            variant='outline'
            className='rounded-xl'
            onClick={goToSignUp}
          >
            Sign Up
          </Button>
          <Button
            className='rounded-xl'
            onClick={goToSignIn}
          >
            Sign In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
