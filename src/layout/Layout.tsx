import * as React from 'react'

import cx from 'classnames'
import styles from './header.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../auth/AuthProvider'

export const Layout = () => {
  const { logout, isAuth } = useAuthContext()
  const navigate = useNavigate()
  const handleLogoutClicked = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <nav
        className={cx(
          styles.nav,
          'font-sans h-32 flex justify-between items-center overflow-hidden mb-16'
        )}
      >
        <div className='container mx-auto '>
          <div className='flex flex-row justify-between items-center'>
            <h1 className={styles.title}>USERS LIST APPLICATION</h1>
            {isAuth && <button className='h-full w-1/4 px-8 text-xl border shadow'>
              <span onClick={handleLogoutClicked}>Logout</span>
            </button>}
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
