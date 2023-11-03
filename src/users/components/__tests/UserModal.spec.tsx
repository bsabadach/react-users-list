import '@testing-library/jest-dom'

import * as React from 'react'
import { render } from '@testing-library/react'

// must be done before important the component
document.body.innerHTML = '<div id="overlay"></div>'
import UsersModal from '../UsersModal'

import mockUser from '@@/integration/fixtures/mockUserResponse.json'

jest.mock('@/users/model/useUser', () => ({
  useUsers: () => ({
    useLoadById: jest.fn(() => ({ data: mockUser, status: 'success' })),
  }),
}))

jest.mock('@/common/components/modal/ModalContext', () => ({
  useModalContext: () => ({
    isOpened: true,
    close: () => {},
  }),
}))

describe('UserCard modal', () => {
  it('renders user modal in overlay without crashing', () => {
    const { getByTestId } = render(<UsersModal selectedUserId="1" />)

    expect(() => getByTestId('user-modal')).not.toThrow()
  })
})
