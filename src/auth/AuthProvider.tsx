import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

import { makeAuthStore, useAuthStore } from './useAuthStore'

const AuthContext = createContext(makeAuthStore())
export const useAuthContext = () => useContext(AuthContext)
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthStore()}>
      {children}
    </AuthContext.Provider>
  )
}
