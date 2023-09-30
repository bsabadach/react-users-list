import { act, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useUsers } from '../useUser'

const mockUsers = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' }
]

jest.mock('../../resource/usersResource', () => ({
  usersResource: {
    loadAll: jest.fn(() => Promise.resolve(mockUsers))
  }
}))

describe('useUsers', () => {
  it('should set selectedUserId using setSelectedUserId', () => {
    const { result } = renderHook(() => useUsers())

    act(() => {
      result.current.selectedUserId.current = '123'
    })

    expect(result.current.selectedUserId.current).toBe('123')
  })
})
