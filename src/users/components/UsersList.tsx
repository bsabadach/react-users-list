import * as React from 'react'
import { memo } from 'react'
import cx from 'classnames'

import { User } from '../model/User'

import UserCard from './UserCard'

import styles from './user.module.css'

interface Props {
  onSelectUser: (id: string) => void
  users: Partial<User>[]
}

const UsersList = ({ users, onSelectUser }: Props) => {
  return (
    <section
      data-testid="users-list"
      className={cx(
        'relative w-full bg-white py-12 rounded-lg',
        styles.usersList
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        {users.map((user) => (
          <UserCard user={user} onSelectUser={onSelectUser} key={user.id} />
        ))}
      </div>
    </section>
  )
}

export default memo(UsersList)
