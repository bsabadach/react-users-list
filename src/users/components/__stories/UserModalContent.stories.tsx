import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { UsersModalContent } from '../UsersModalContent'

import { Modal } from '@/common/components/modal/Modal'

const user = {
  id: '60d0fe4f5311236168a109cb',
  title: 'miss',
  firstName: 'Edita',
  lastName: 'Vestering',
  picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
  gender: 'female',
  email: 'edita.vestering@example.com',
  dateOfBirth: '1956-04-15T00:10:35.555Z',
  phone: '(019)-646-0430',
  location: {
    street: '1371, Dilledonk-Zuid',
    city: 'Den Bommel',
    state: 'Gelderland',
    country: 'Netherlands',
    timezone: '-5:00',
  },
  registerDate: '2021-06-21T21:02:07.533Z',
}

const meta = {
  component: UsersModalContent,
  argTypes: {
    fetchStatus: {
      options: ['loading', 'success'],
    },
    user: user,
  },
} satisfies Meta<typeof UsersModalContent>

export default meta

type Story = StoryObj<typeof meta>

export const UserModalStory: Story = {
  render: ({ fetchStatus, user }) => {
    return (
      <>
        <h1>Open control side panel and change the fetchStatus</h1>
        <div className="w-[650px] overflow-x-hidden">
          <Modal close={() => alert('Close Modal called')}>
            <UsersModalContent fetchStatus={fetchStatus} user={user} />
          </Modal>
        </div>
      </>
    )
  },
  args: {
    fetchStatus: 'loading',
    user: user,
  },
}
