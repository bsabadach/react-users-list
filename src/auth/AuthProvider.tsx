import React, { createContext, FC, PropsWithChildren, useContext } from 'react'
import { makeStore, useLoginStore } from './useLoginStore'

const AuthContext = createContext(makeStore())
export const useAuthContext = () => useContext(AuthContext)
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AuthContext.Provider value={useLoginStore()}>
    {children}
  </AuthContext.Provider>
}