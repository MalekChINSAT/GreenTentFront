import type { ReactNode } from 'react';

import authRoutes from './auth';
import homeRoutes from './home';
import otherRoutes from './other';

export type RouteType = {
  element: ReactNode;
  path: string;
  children?: ReactNode;
};

const routes: RouteType[] = [...homeRoutes,...authRoutes, ...otherRoutes];

export default routes;
