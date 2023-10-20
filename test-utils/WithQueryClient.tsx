import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import * as React from 'react'
import { beforeEach, afterEach } from '@jest/globals'

export default () => {
  let queryClient: QueryClient

  const WrapperWithQueryClient: FC<PropsWithChildren> = ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
  })

  return WrapperWithQueryClient
}
