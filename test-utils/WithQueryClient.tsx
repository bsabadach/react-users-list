import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { afterEach, beforeEach } from '@jest/globals'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
