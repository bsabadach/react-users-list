import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ModalProvider } from './common/components/modal/ModalContext'
import { AuthProvider } from './auth/AuthProvider'

const queryClient = new QueryClient()
const AppContext: FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
    </QueryClientProvider>
  </AuthProvider>
)
export default AppContext
