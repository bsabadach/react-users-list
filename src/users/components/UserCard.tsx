import * as React from 'react'
import { useCallback, useState } from 'react'
import cx from 'classnames'
import { SimpleUser } from '../model/user'
import styles from './user.module.css'

interface Props {
  user: SimpleUser
  onSelectUser: (selectedUserId: string) => void
}

const UserCard = ({ user, onSelectUser }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleSelectUser = useCallback(() => {
    onSelectUser(user.id)
  }, [user])

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <div
      className={cx(
        'w-full md:w-1/3 lg:w-1/5 flex flex-col px-3',
        styles.userCard
      )}
    >
      <div className="relative overflow-hidden bg-white rounded-lg shadow-xl hover:shadow-raised transform transition duration-200 hover:-translate-y-2">
        <div
          className={cx(styles.userImagePlaceholder, {
            [styles.loaded]: imageLoaded
          })}
        ></div>
        <img
          className={cx('w-full', styles.userImage, {
            [styles.ready]: imageLoaded
          })}
          src={user.picture}
          alt={`${user.firstName} ${user.lastName}`}
          onLoad={handleImageLoaded}
          data-testid="user-image"
        />

        <div
          className={cx(
            'p-6 flex flex-col justify-between',
            styles.detailWrapper
          )}
        >
          <p className="font-medium text-gray-900 leading-normal mb-2">
            {user.firstName} {user.lastName}
          </p>
          <p
            className="font-hairline text-sm text-gray-500 truncate mb-4"
            title={user.email}
          >
            {user.email}
          </p>
          <button
            onClick={handleSelectUser}
            className="text-gray-500 w-full text-right"
            data-testid={`select-user-${user?.id}`}
          >
            <i className="fas fa-eye fa-fw" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
