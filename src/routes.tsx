import * as React from 'react'

import NotFound from './common/components/404/NotFound'
import GuardedRoute from './common/components/guarded-route/GuardedRoute'
import HomeView from './home/HomeView'
import UsersView from './users/UsersView'
import App from './App'

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
