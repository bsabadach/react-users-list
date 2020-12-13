import * as React from 'react'
import { FC } from 'react'
import { createPortal } from 'react-dom'

import { useModalStore } from './ModalContext'

import { Modal } from './Modal'

const overlayWrapper = document.querySelector('#modal')

export const ModalContainer: FC = ({ children }) => {
  const {
    state: { isOpened },
    actions: { close }
  } = useModalStore()
  return isOpened
    ? createPortal(
        <Modal close={close}>{children}</Modal>,
        overlayWrapper as Element
      )
    : null
}
