import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import UsersList from '@/users/components/UsersList'
import mockUsersData from '@@/integration/fixtures/mockUsersResponse.json'

const meta = {
  component: UsersList,
  tags: ['autodocs'],
  argTypes: {
    users: mockUsersData.data,
    onSelectUser: () => {},
  },
} satisfies Meta<typeof UsersList>

export default meta

type Story = StoryObj<typeof meta>

export const UsersListStory: Story = {
  render: ({ users, onSelectUser }) => {
    return <UsersList users={users} onSelectUser={onSelectUser} />
  },
  args: {
    users: mockUsersData.data,
    onSelectUser: () => {},
  },
}
