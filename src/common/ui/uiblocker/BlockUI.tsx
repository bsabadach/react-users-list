import * as React from 'react'
import { FC } from 'react'

import * as styles from './blocker.module.css'

export const BlockUI: FC<{
  when: boolean
}> = ({ when, children }) => {
  return (
    <>
      {children}
      {when && (
        <div className={styles.blockerWrapper}>
          <div className={styles.spinner}>
            <div className={styles.doubleBounce2}></div>
            <div className={styles.doubleBounce1}></div>
          </div>
        </div>
      )}
    </>
  )
}
