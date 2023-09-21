import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { UsersView } from './users/UsersView'
import GuardedRoute from './common/components/guarded-route/GuardedRoute'
import { AuthProvider } from './auth/AuthProvider'

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
      }
    ]
  }
])

const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
