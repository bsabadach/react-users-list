import * as React from 'react'
import { FC, PropsWithChildren } from 'react'

import cx from 'classnames'

import * as styles from './modal.module.css'

export const Modal: FC<PropsWithChildren<{ close: () => void }>> = ({ children, close }) => {
  return <div className={styles.modalBackground} id='modal'>
    <div
      className={cx(
        'bg-white rounded shadow max-w-full max-h-full',
        styles.modalWrapper
      )}
    >
      <div className='flex flex-col'>
        <div className='flex flex-col items-end'>
          <button onClick={close} className='w-8'>
            <i
              data-fa-symbol='delete'
              className='fas fa-times fa-fw text-gray-500'
            />
          </button>
        </div>
      </div>
      <div className={styles.modalWrapper}>{children}</div>
    </div>
  </div>
}
