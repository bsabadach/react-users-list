import * as React from 'react'
import { FC, PropsWithChildren } from 'react'

import cx from 'classnames'

import styles from './modal.module.css'

export const Modal: FC<PropsWithChildren<{ close: () => void }>> = ({
  children,
  close,
}) => {
  return (
    <div
      className={cx(
        'bg-white rounded shadow max-w-full max-h-full p-4',
        styles.modalWrapper,
      )}
      data-testid="modal-wrapper"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-end">
          <button onClick={close} className="w-8">
            X
          </button>
        </div>
      </div>
      <div className={styles.modalWrapper}>{children}</div>
    </div>
  )
}
