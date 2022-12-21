import { lazy } from 'react';

import { Navigate, Route } from 'react-router-dom';

import  HomeLayout  from '@/components/layout/Home';
import { PublicGuard } from '@/lib/guards';

import type { RouteType } from '.';

const Home = lazy(() => import('@/pages/Home'));

const homeNavigation = [
	{
	  element: <Home />,
	  href: '',
	},
  ];

  const routes: RouteType[] = [
	{
	  children: (
		<>
		  {homeNavigation.map(({ element, href }, idx) => (
			<Route key={idx} element={element} path={href} />
		  ))}
		</>
	  ),
	  element: (
		<PublicGuard>
		  <HomeLayout />
		</PublicGuard>
	  ),
	  path: '',
	},
  ];

export default routes;