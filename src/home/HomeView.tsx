import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../auth/AuthProvider'
import styles from '../layout/layout.module.css'

const HomeView = () => {
  const { login, isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const handleButtonClicked = () => {
    login()
    navigate('/users')
  }

  return (
    <div className="container mx-auto rounded py-8 shadow bg-white rounded-lg">
      <div className={'flex flex-row justify-between px-8'}>
        <h1 className="w-full text-center text-2xl">
          User list demo application with fake authentication
        </h1>
        {!isAuthenticated && (
          <button
            data-testid="login-button"
            onClick={handleButtonClicked}
            className="shadow h-full w-1/4 border text-xl rounded-2xl"
          >
            <span className={styles.authAction} data-testid="login-text">
              Login
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default HomeView
