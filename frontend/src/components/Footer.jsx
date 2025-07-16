import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t fixed bottom-0 w-full border-border text-center text-sm text-muted-foreground font-bold backdrop-blur-md bg-muted/70 border-b  px-6 py-7'>
      Abdul Rafey © {new Date().getFullYear()} Blogify. All rights reserved.
    </footer>
  );
};

export default Footer;
