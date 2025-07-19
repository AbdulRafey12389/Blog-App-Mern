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
import CreateAndUpdateBlog from '@/pages/CreateAndUpdateBlog';
import VerifyEmail from '@/pages/VerifyEmail';
import BlogDetail from '@/pages/BlogDetails';
import Admin from '@/pages/Admin';
import BookMarks from '@/pages/BookMarks';

// SIGN UP FUNCTIONS...
import sigupActionFucntion from './signUpActions/signupAction';
import signInAction from './signUpActions/signinActionFunction';

// LOADER FUNCTION...
import getBlogByIdLoaderFunction from './blogLoader/getBlogById';
import getAllPbulicBlogLoaderFunction from './blogLoader/getAllPublicBlogsLoader';
import getBookMarksLoaderFunction from './userLoader/getBookMarksLoader';
import getUserStatsLoaderFunction from './userLoader/getUserStatsLoader';

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
        loader: getUserStatsLoaderFunction,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
      {
        path: '/createblog',
        element: <CreateAndUpdateBlog />,
      },
      {
        path: '/edit/:blogId',
        element: <CreateAndUpdateBlog />,
      },
      {
        path: '/blogs/:blogId',
        element: <BlogDetail />,
        loader: getBlogByIdLoaderFunction,
      },
      {
        path: '/bookmarks',
        element: <BookMarks />,
        loader: getBookMarksLoaderFunction,
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
