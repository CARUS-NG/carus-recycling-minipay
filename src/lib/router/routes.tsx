import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import Schedule from '../pages/schedule';
import Pickup from '../pages/schedule/pickup';

const Home = React.lazy(() => import('../pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },
  {
    path: '/schedule/pickup',
    element: <Pickup />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
