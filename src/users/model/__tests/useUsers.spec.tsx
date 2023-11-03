import * as React from 'react'

import { act, render, renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryObserverResult } from '@tanstack/react-query'

import { useUsers } from '../useUser'
import { SimpleUser, User } from '../User'
import makeWithQueryClientProvider from '@@/test-utils/WithQueryClient'

const mockUsers = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
]

jest.mock('../../resource/usersResource', () => ({
  usersResource: {
    loadAll: jest.fn(() => Promise.resolve(mockUsers)),
    load: jest.fn((id: string) =>
      Promise.resolve(mockUsers.at(parseInt(id) - 1))
    ),
  },
}))

describe('useUsers', () => {
  const WithQueryClientProvider = makeWithQueryClientProvider()

  it('useLoadById should load user using useQuery', async () => {
    let userFetchResult = {} as Partial<
      QueryObserverResult<SimpleUser, SimpleUser>
    >
    const { result } = renderHook(() => useUsers())
    const Actor = () => {
      userFetchResult = result.current.useLoadById('1') as Partial<
        QueryObserverResult<SimpleUser, SimpleUser>
      >
      return <div></div>
    }

    act(() => {
      render(
        <WithQueryClientProvider>
          <Actor />
        </WithQueryClientProvider>
      )
    })

    await waitFor(() => {
      expect(userFetchResult.isSuccess).toBe(true)
      expect(userFetchResult.data).toEqual(mockUsers.at(0))
    })
  })

  it('useLoadAll should list users using useQuery', async () => {
    const { result } = renderHook(() => useUsers())

    let usersListResult = {
      data: [],
      isSuccess: false,
    } as Partial<QueryObserverResult<User[], User[]>>
    const Actor = () => {
      usersListResult = result.current.useLoadAll() as Partial<
        QueryObserverResult<User[], User[]>
      >
      return null
    }

    act(() => {
      render(
        <WithQueryClientProvider>
          <Actor />
        </WithQueryClientProvider>
      )
    })

    await waitFor(() => {
      expect(usersListResult.isSuccess).toBe(true)
      expect(usersListResult.data).toEqual(mockUsers)
    })
  })
})
