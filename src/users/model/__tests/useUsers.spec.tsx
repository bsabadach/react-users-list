import * as React from 'react'

import { act, render, renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryObserverResult } from '@tanstack/react-query'

import { useUsers } from '../useUser'
import { User } from '../user'
import makeWithQueryClient from '../../../../test-utils/WithQueryClient'

const mockUsers = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
]

jest.mock('../../resource/usersResource', () => ({
  usersResource: {
    loadAll: jest.fn(() => Promise.resolve(mockUsers)),
    load: jest.fn((id: string) =>
      Promise.resolve(mockUsers.at(parseInt(id) - 1)),
    ),
  },
}))

describe('useUsers', () => {
  const WrapperWithQueryClient = makeWithQueryClient()

  it('useLoadById should load user useQuery', async () => {
    let userFetchResult = {} as unknown as QueryObserverResult<User[], User[]>
    const { result } = renderHook(() => useUsers())
    const Actor = () => {
      userFetchResult = result.current.useLoadById(
        '1',
      ) as unknown as QueryObserverResult<User[], User[]>
      return <div></div>
    }

    act(() => {
      render(
        <WrapperWithQueryClient>
          <Actor />
        </WrapperWithQueryClient>,
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
    } as unknown as QueryObserverResult<User[], User[]>
    const Actor = () => {
      usersListResult =
        result.current.useLoadAll() as unknown as QueryObserverResult<
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

    await waitFor(() => {
      expect(usersListResult.isSuccess).toBe(true)
      expect(usersListResult.data).toEqual(mockUsers)
    })
  })
})
