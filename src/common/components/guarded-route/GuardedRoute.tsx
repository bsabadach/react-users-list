import React, { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../../auth/AuthProvider'

const GuardedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuth } = useAuthContext()
  return isAuth ? children : <Navigate to="/" />
}
export default GuardedRoute
