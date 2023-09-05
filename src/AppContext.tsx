import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useMakeModalContext } from './common/ui/modal/ModalContext'


const queryClient = new QueryClient()
const { ModalProvider,modalContextValue }=useMakeModalContext()
const AppContext: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ModalProvider value={modalContextValue}>
      {children}
    </ModalProvider>

  </QueryClientProvider>


)

export default AppContext
