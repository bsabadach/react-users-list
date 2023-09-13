import { useState } from 'react'

export const makeStore = (isAuth = false, setAuthState = (_: boolean) => {}) => {
  const login = () => {
    setAuthState(true)
  }
  const logout = () => {
    setAuthState(false)
  }

  return {
    logout,
    login,
     isAuth
  }
}
export const useLoginStore = () => {
  const [authState, setAuthState] = useState(false)
  return makeStore(authState, setAuthState)
}