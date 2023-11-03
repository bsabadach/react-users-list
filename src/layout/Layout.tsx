import * as React from 'react'

import cx from 'classnames'
import styles from './layout.module.css'
import { Link, Outlet } from 'react-router-dom'
import { useAuthContext } from '@/auth/AuthProvider'

const Layout = () => {
  const { logout, isAuthenticated } = useAuthContext()

  return (
    <div className={'relative min-h-[100svh]'}>
      <nav
        className={cx(
          styles.nav,
          'mb-8 flex h-32 items-center justify-between overflow-hidden font-sans bg-white'
        )}
      >
        <div className="container mx-auto flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <Link to="/">
              <h1 className={styles.title}>USERS LIST APPLICATION DEMO</h1>
            </Link>
            {isAuthenticated && (
              <button
                onClick={logout}
                className="h-8 w-1/5 border px-8 text-xl shadow rounded-lg"
              >
                <span className={styles.authAction} data-testid="logout-text">
                  Logout
                </span>
              </button>
            )}
          </div>
          <div className="text-sm text-gray-400">
            <a
              href="https://prismatic-tarsier-d6698c.netlify.app"
              target="_blank"
            >
              see storybook &gt;&gt;
            </a>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
