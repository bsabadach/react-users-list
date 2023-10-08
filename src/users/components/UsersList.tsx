import * as React from 'react'
import cx from 'classnames'

import UserCard from './UserCard'

import styles from './user.module.css'
import { User } from '../model/user'
import { memo } from 'react'

interface Props {
  onSelectUser: (id: string) => void
  users: Partial<User>[]
}

const UsersList = ({ users, onSelectUser }: Props) => {
  return (
    <section
      data-testid="users-list"
      className={cx('w-full bg-white relative', styles.usersList)}
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
