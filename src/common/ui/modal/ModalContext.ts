import { configureStoreContext, GetState, UpdateState } from '../../store'

const TAILWIND_OVERFLOW_Y_CLASS = 'overflow-y-hidden'
export const MODAL_CONTENT_ID = 'modal-content'

const initialState = {
  isOpened: false
}
type ModalState = typeof initialState

let localSetState: UpdateState<ModalState>

const handleDocumentClick = (evt: MouseEvent) => {
  if ((evt?.target as HTMLElement).id !== MODAL_CONTENT_ID) return
  restoreDocument()
}

const restoreDocument = () => {
  document.removeEventListener('click', handleDocumentClick)
  document.body.classList.remove(TAILWIND_OVERFLOW_Y_CLASS)
  localSetState({
    isOpened: false
  })
}

export const actions = (
  _: GetState<ModalState>,
  setState: UpdateState<ModalState>
) => ({
  open() {
    localSetState = setState
    document.body.classList.add(TAILWIND_OVERFLOW_Y_CLASS)
    document.addEventListener('click', handleDocumentClick)
    setState({
      isOpened: true
    })
  },

  close() {
    restoreDocument()
  }
})

const {
  useStore: useModalStore,
  StoreProvider: ModalStoreProvider
} = configureStoreContext(initialState, actions, 'modal')
export { useModalStore, ModalStoreProvider }
