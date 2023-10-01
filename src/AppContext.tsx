import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ModalProvider } from './common/components/modal/ModalContext'

const queryClient = new QueryClient()
const AppContext: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ModalProvider>{children}</ModalProvider>
  </QueryClientProvider>
)
export default AppContext
