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

// SIGN UP FUNCTIONS...
import sigupActionFucntion from './signUpActions/signupAction';
import signInAction from './signUpActions/signinActionFunction';

// LOADER FUNCTION...
import getBlogByIdLoaderFunction from './blogLoader/getBlogById';
import getAllPbulicBlogLoaderFunction from './blogLoader/getAllPublicBlogsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: getAllPbulicBlogLoaderFunction,

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
        loader: getBlogByIdLoaderFunction,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
    action: sigupActionFucntion,
  },
  {
    path: '/signin',
    element: <SignIn />,
    action: signInAction,
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
