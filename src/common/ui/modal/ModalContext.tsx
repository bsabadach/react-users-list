import { createContext, PropsWithChildren, useState } from 'react'

const TAILWIND_OVERFLOW_Y_CLASS = 'overflow-y-hidden'
export const MODAL_CONTENT_ID = 'modal-content'



  const modalContextValue= false
  const ModalContext=createContext(modalContextValue)
  const ModalProvider:PropsWithChildren<typeof modalContextValue>=({children})=>{
    const [isOpened,setIsOpened] = useState(false);
    const restoreDocument = () => {
      document.removeEventListener('click', handleDocumentClick)
      document.body.classList.remove(TAILWIND_OVERFLOW_Y_CLASS)
      setIsOpened(false)
    }

    const handleDocumentClick = (evt: MouseEvent) => {
      if ((evt?.target as HTMLElement).id !== MODAL_CONTENT_ID) return
      restoreDocument()
    }


    const open = () => {
      document.body.classList.add(TAILWIND_OVERFLOW_Y_CLASS)
      document.addEventListener('click', handleDocumentClick)
      setIsOpened( true)
    }

    const close = () => {
      restoreDocument()
      setIsOpened(false)
    }
    return <ModalContext.Provider>
      {children}
      </ModalContext.Provider>
  }



