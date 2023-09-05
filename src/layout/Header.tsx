import * as React from 'react'

import cx from 'classnames'
import * as styles from './header.module.css'

export const Header = () => {
  return (
    <nav
      className={cx(
        styles.nav,
        'font-sans h-32 flex justify-between items-center overflow-hidden mb-16'
      )}
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className={styles.title}>USERS LIST APPLICATION</h1>
        </div>
      </div>
    </nav>
  )
}
