import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { Modal } from './Modal'

const overlayWrapper = document.querySelector('#overlay')

export const ModalContainer: FC<PropsWithChildren<{ isOpened: boolean }>> = ({ children,isOpened }) => {
  return isOpened
    ? createPortal(
      <Modal close={close}>{children}</Modal>,
      overlayWrapper as Element
    )
    : null
}
