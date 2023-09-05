import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()
const AppContext: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>

)

export default AppContext
