import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockOpen = jest.fn()

jest.mock('../../common/components/modal/ModalContext', () => ({
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

import UsersView from '../UsersView'
import { SimpleUser } from '../model/user'

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
