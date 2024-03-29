import '@testing-library/jest-dom'

import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

const mockOpen = jest.fn()

jest.mock('@/common/components/modal/ModalContext', () => ({
  useModalContext: () => ({
    open: mockOpen,
  }),
}))

const mockUsers: Partial<SimpleUser>[] = [
  { id: '1', firstName: 'User 1' },
  { id: '2', firstName: 'User 2' },
]

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: mockUsers,
  }),
}))

import { SimpleUser } from '../model/User'
import UsersView from '../UsersView'

describe('UsersView Component', () => {
  it('renders UsersList when data is successfully fetched', () => {
    render(<UsersView />)
    expect(() => screen.getByTestId('users-list')).not.toThrow()
  })

  it("doesn't renders UsersModal initially with no selected user", () => {
    render(<UsersView />)
    expect(() => screen.getByTestId('users-modal')).toThrow()
  })

  it('opens modal when a user is selected', () => {
    render(<UsersView />)
    fireEvent.click(screen.getByTestId('select-user-1'))
    expect(mockOpen).toHaveBeenCalled()
  })
})
