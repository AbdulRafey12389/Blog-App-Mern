// NODE MODULES...

import { createBrowserRouter } from 'react-router-dom';

// ROOT LAYOUT
import App from '@/App';

// PAGES...
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/DashBoard';
import Setting from '@/pages/Setting';
import Home from '@/pages/Home';
import CreateBlog from '@/pages/CreateBlog';
import VerifyEmail from '@/pages/VerifyEmail';
import BlogDetail from '@/pages/BlogDetails';
import Admin from '@/pages/Admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        path: '',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
      {
        path: '/createblog',
        element: <CreateBlog />,
      },
      {
        path: '/blogs/:blogId',
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },

  {
    path: '/verifyemail',
    element: <VerifyEmail />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

export default router;
