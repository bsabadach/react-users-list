import React from 'react'
import UserCard from '..//UserCard'

const user = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  picture: 'https://randomuser.me/api/portraits/women/58.jpg',
}
export const WithoutImage = () => (
  <UserCard
    user={{ ...user, picture: 'unknow' }}
    onSelectUser={(selectedUserId: string) => {
      alert(`Selected user with ID: ${selectedUserId}`)
    }}
  />
)
export const WithImage = () => (
  <UserCard
    user={user}
    onSelectUser={(selectedUserId: string) => {
      alert(`Selected user with ID: ${selectedUserId}`)
    }}
  />
)

export default {
  title: 'UserCard',
  component: UserCard,
}
