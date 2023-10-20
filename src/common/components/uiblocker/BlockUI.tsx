import * as React from 'react'
import { FC, memo, PropsWithChildren } from 'react'

import styles from './blocker.module.css'

const BlockUI: FC<
  PropsWithChildren<{
    when: boolean
  }>
> = ({ when, children }) => {
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

export default memo(BlockUI)
