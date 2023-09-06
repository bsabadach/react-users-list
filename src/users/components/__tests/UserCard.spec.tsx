import * as React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { UserCard } from '../UserCard'

const user = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  title: 'CEO',
  email: 'johndoe@example.com',
  picture: 'https://example.com/johndoe.jpg'
}

describe('UserCard component', () => {
  const onSelectUser = jest.fn()
  it('renders user details', () => {

    const { getByText, getByAltText } = render(
      <UserCard user={user} onSelectUser={onSelectUser} />
    )

    const fullName = getByText('John Doe')
    const email = getByText('johndoe@example.com')
    const userImage = getByAltText('John Doe')

    expect(fullName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(userImage).toBeInTheDocument()
  })

  it('calls onSelectUser when the button is clicked', () => {
    const { getByTestId } = render(
      <UserCard user={user} onSelectUser={onSelectUser} />
    )
    const selectButton = getByTestId('select-user-1')
    fireEvent.click(selectButton)

    expect(onSelectUser).toHaveBeenCalledWith('1')
  })

  it('marks the user image as ready when loaded', () => {
    const onSelectUser = jest.fn()

    const { getByTestId } = render(
      <UserCard user={user} onSelectUser={onSelectUser} />
    )

    const userImage = getByTestId('user-image')

    fireEvent.load(userImage)

    waitFor(() => {
      expect(userImage).toHaveClass('ready')
    })
  })
})
