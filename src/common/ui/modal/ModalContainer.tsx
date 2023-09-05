import * as React from 'react'
import { FC, PropsWithChildren, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

import { Modal } from './Modal'
import { useMakeModalContext } from './ModalContext'


const overlayWrapper = document.querySelector('#overlay')

export const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  const {isOpened,close}=useContext(useMakeModalContext().ModalContext)
  return isOpened
    ? createPortal(
      <Modal close={close}>{children}</Modal>,
      overlayWrapper as Element
    )
    : null
}
