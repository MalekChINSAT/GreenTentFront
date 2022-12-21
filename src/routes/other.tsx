import { lazy } from 'react';

import type { RouteType } from '.';

const NotFound = lazy(() => import('@/pages/other/NotFound'));
const Welcome = lazy(() => import('@/pages/other/Welcome'));

const routes: RouteType[] = [
  {
    element: <Welcome />,
    path: '/',
  },
  { element: <NotFound />, path: '*' },
];

export default routes;
