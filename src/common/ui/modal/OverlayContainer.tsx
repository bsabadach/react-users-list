import * as React from 'react'
import { FC, PropsWithChildren} from 'react'
import { createPortal } from 'react-dom'

import { Overlay } from './Overlay'
import { useModalContext } from './ModalContext'


const overlayWrapper = document.querySelector('#overlay')

export const OverlayContainer: FC<PropsWithChildren> = ({ children }) => {
  const {isOpened,close}=useModalContext()
  return isOpened
    ? createPortal(
      <Overlay close={close}>{children}</Overlay>,
      overlayWrapper as Element
    )
    : null
}
