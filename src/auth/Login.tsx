import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from './AuthProvider'

export const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const handleLoginClicked = () => {
    login()
    navigate('/users')
  }
  return (
    <div className="container mx-auto flex flex-col items-end">
      <button className="h-full w-1/4 border px-8 text-xl shadow">
        <span onClick={handleLoginClicked}>Login</span>
      </button>
    </div>
  )
}

export default Login
