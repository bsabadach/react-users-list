import App from './App'
import GuardedRoute from './common/components/guarded-route/GuardedRoute'
import { UsersView } from './users/UsersView'
import HomeView from './home/HomeView'
import NotFound from './common/components/404/NotFound'
import * as React from 'react'

export default [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeView />,
      },
      {
        path: '/users',
        element: (
          <GuardedRoute>
            <UsersView />
          </GuardedRoute>
        ),
      },
      {
        path: '*',
        element: (
          <GuardedRoute>
            <NotFound />
          </GuardedRoute>
        ),
      },
    ],
  },
]
