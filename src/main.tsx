import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { UsersView } from './users/UsersView'
import App from './App'
import NotFound from './common/components/404/NotFound'
import GuardedRoute from './common/components/guarded-route/GuardedRoute'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: (
          <GuardedRoute>
            <UsersView />
          </GuardedRoute>
        )
      },
      {
        path: '*',
        element: (
          <GuardedRoute>
            <NotFound />
          </GuardedRoute>
        )
      }
    ]
  }
])

const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
