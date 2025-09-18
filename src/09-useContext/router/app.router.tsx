import { createBrowserRouter, Navigate } from 'react-router';
import { AboutPage } from '../pages/about/AboutPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { PrivateRouter } from './PrivateRouter';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <PrivateRouter element={<ProfilePage />} />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
