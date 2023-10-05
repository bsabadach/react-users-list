import * as React from 'react'
import { FC, PropsWithChildren } from 'react'

import { act, render, renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  QueryClient,
  QueryClientProvider,
  QueryObserverResult,
} from '@tanstack/react-query'
import { useUsers } from '../useUser'
import { User } from '../user'

const mockUsers = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
]

jest.mock('../../resource/usersResource', () => ({
  usersResource: {
    loadAll: jest.fn(() => Promise.resolve(mockUsers)),
  },
}))

describe('useUsers', () => {
  let queryClient: QueryClient

  const WrapperWithQueryClient: FC<PropsWithChildren<object>> = ({
    children,
  }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

  beforeAll(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
  })

  it('should list users using useQuery', async () => {
    const { result } = renderHook(() => useUsers())

    let userResult = {
      data: [],
      isSuccess: false,
    } as unknown as QueryObserverResult<User[], User[]>
    const Actor = () => {
      userResult = result.current.useLoadAll() as QueryObserverResult<
        User[],
        User[]
      >
      return null
    }

    act(() => {
      render(
        <WrapperWithQueryClient>
          <Actor />
        </WrapperWithQueryClient>,
      )
    })

    await waitFor(() => expect(userResult.isSuccess).toBe(true))

    expect(userResult.data).toEqual(mockUsers)
  })

  it('should set selectedUserId using setSelectedUserId', () => {
    const { result } = renderHook(() => useUsers())

    act(() => {
      result.current.selectedUserId.current = '123'
    })

    expect(result.current.selectedUserId.current).toBe('123')
  })
})
