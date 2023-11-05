import React, { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@/auth/AuthProvider'

const GuardedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuthContext()
  return isAuthenticated ? children : <Navigate to="/" />
}
export default GuardedRoute
