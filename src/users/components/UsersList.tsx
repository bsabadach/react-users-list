import * as React from 'react'
import { memo } from 'react'
import cx from 'classnames'

import UserCard from './UserCard'

import styles from './user.module.css'
import { SimpleUser } from '../model/user'

interface Props {
  onSelectUser: (id: string) => void
  users: SimpleUser[]
}

const UsersList = ({ users, onSelectUser }: Props) => {
  return (
    <section
      data-testid="users-list"
      className={cx('m-auto container bg-white relative', styles.usersList)}
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        {users.map(user => (
          <UserCard user={user} onSelectUser={onSelectUser} key={user.id} />
        ))}
      </div>
    </section>
  )
}

export default memo(UsersList)
