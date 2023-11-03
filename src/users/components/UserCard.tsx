import * as React from 'react'
import { memo, useCallback, useState } from 'react'
import cx from 'classnames'

import styles from './user.module.css'

import { User } from '@/users/model/User'

export type Props = {
  user: Partial<User>
  onSelectUser: (selectedUserId: string) => void
}

const UserCard = ({ user, onSelectUser }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const handleSelectUser = useCallback(() => {
    onSelectUser(user.id ?? '')
  }, [user, onSelectUser])

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <div
      className={cx(
        'flex w-full flex-col px-3 md:w-1/3 lg:w-1/5',
        styles.userCard
      )}
    >
      <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition duration-200 hover:shadow-raised  hover:-translate-y-2">
        <div
          className={cx(styles.userImagePlaceholder, {
            [styles.loaded]: imageLoaded,
          })}
        ></div>
        <img
          className={cx('w-full', styles.userImage, {
            [styles.ready]: imageLoaded,
          })}
          src={user.picture}
          alt={`${user.firstName} ${user.lastName}`}
          onLoad={handleImageLoaded}
          data-testid="user-image"
        />

        <div
          className={cx(
            'flex flex-col justify-between p-6',
            styles.detailWrapper
          )}
        >
          <p className="mb-2 font-medium leading-normal text-gray-900">
            {user.firstName} {user.lastName}
          </p>
          <p
            className="font-hairline mb-4 truncate text-sm text-gray-500"
            title={user.email}
          >
            {user.email}
          </p>
          <button
            onClick={handleSelectUser}
            className="w-full text-right text-sm text-gray-500"
            data-testid={`select-user-${user?.id}`}
          >
            <i className="fas fa-eye fa-fw" />
            see more...
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(UserCard)
