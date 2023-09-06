import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { Modal } from './Modal'
import { useModalContext } from './ModalContext'
import styles from './modal.module.css'


const overlayWrapper = document.querySelector('#overlay')

export const Overlay: FC<PropsWithChildren> = ({ children }) => {
  const { isOpened, close } = useModalContext()
  return isOpened
    ? createPortal(
      <div className={styles.overlay}>
        <Modal close={close}>{children}</Modal>
      </div>,
      overlayWrapper as Element
    )
    : null
}
