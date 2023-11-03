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
        'max-h-full max-w-full rounded bg-white p-4 shadow',
        styles.modalWrapper
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
