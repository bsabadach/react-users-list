import * as React from 'react'
import cx from 'classnames'

import { UserCard } from './UserCard'
import { SimpleUser } from '..'

import styles from './user.module.css'

type Props = {
  onSelectUser: (id: string) => void
  users: SimpleUser[]
}

export const UsersList = ({ users, onSelectUser }: Props) => {
  return (
    <section
      className={cx('m-auto container bg-white relative', styles.usersList)}
    >
      <div className="flex flex-wrap items-center justify-center">
        {users.map((user, index) => (
          <UserCard user={user} onSelectUser={onSelectUser} key={index} />
        ))}
      </div>
    </section>
  )
}
