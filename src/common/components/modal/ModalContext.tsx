import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'

const TAILWIND_OVERFLOW_Y_CLASS = 'overflow-y-hidden'
export const MODAL_CONTENT_ID = 'modal-content'

const ModalContext = createContext({
  open: () => {},
  close: () => {},
  isOpened: false,
})
export const useModalContext = () => useContext(ModalContext)

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)
  const restoreDocument = () => {
    document.removeEventListener('click', handleDocumentClick)
    document.body.classList.remove(TAILWIND_OVERFLOW_Y_CLASS)
    setIsOpened(false)
  }

  const handleDocumentClick = (evt: MouseEvent) => {
    if ((evt?.target as HTMLElement).id !== MODAL_CONTENT_ID) return
    close()
  }

  const open = () => {
    document.body.classList.add(TAILWIND_OVERFLOW_Y_CLASS)
    document.addEventListener('click', handleDocumentClick)
    setIsOpened(true)
  }

  const close = () => {
    restoreDocument()
    setIsOpened(false)
  }
  const contextValue = useMemo(() => ({ open, close, isOpened }), [isOpened])

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
