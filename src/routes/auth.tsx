import { lazy } from 'react';

import { Navigate, Route } from 'react-router-dom';

import { AuthLayout } from '@/components/layout';
import { PublicGuard } from '@/lib/guards';
import type { RouteType } from '.';

const SignIn = lazy(() => import('@/pages/auth/SignIn'));
const SignUp = lazy(() => import('@/pages/auth/SignUp'));

const authNavigation = [
  {
    element: <Navigate to="sign-in" />,
    href: '',
  },
  {
    element: <SignIn />,
    href: 'sign-in',
  },
  {
    element: <SignUp />,
    href: 'sign-up',
  },
];

const routes: RouteType[] = [
  {
    children: (
      <>
        {authNavigation.map(({ element, href }, idx) => (
          <Route key={idx} element={element} path={href} />
        ))}
      </>
    ),
    element: (
      <PublicGuard>
        <AuthLayout />
      </PublicGuard>
      ),
    path: 'auth',
  },
];

export default routes;
