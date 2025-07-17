// components/DeleteBlogDialog.jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

export default function DeleteBlogDialog({
  open,
  onOpenChange,
  blog,
  onConfirm,
  isloading,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-destructive'>Delete Blog</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>"{blog?.title}"</strong>?
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant='ghost'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={() => onConfirm(blog._id)}
            disabled={isloading}
          >
            {isloading ? <LoaderCircle className='animate-spin' /> : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
