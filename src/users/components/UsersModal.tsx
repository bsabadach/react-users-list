import * as React from 'react'
import { FC } from 'react'
import { format, toDate } from 'date-fns'
import cx from 'classnames'

import { User } from '..'
import { BlockUI } from '../../common/ui/uiblocker/BlockUI'
import { Status } from '../../common/http/remoteData'

import * as styles from './user.css'

const formatDate = (input: string) => {
  if (!input) return ''
  return format(toDate(new Date(input)), 'yyyy-MM-dd')
}

type Props = {
  user: User
  fetchStatus: Status
}

export const UsersModal: FC<Props> = ({ fetchStatus, user }) => (
  <div className={cx('relative p-4', styles.userModalWrapper)}>
    <BlockUI when={fetchStatus.pending}>
      <div
        className={cx(styles.userModalContent, {
          [styles.ready]: fetchStatus.success
        })}
      >
        <div className="overflow-hidden flex flex-row mb-4">
          <div className="w-1/3">
            <img
              className="w-full rounded"
              src={user.picture}
              alt={user.lastName}
            />
          </div>
          <div className="w-2/3 px-8 text-gray-800">
            <div className="text-sm mb-4 text-gray-500">{user.id}</div>
            <h2 className="text-xl text-truncate mb-4 ">
              <b>
                {user.title}. {user.firstName} {user.lastName}
              </b>
            </h2>
            <p className="text-sm text-truncate mb-2">
              <span>
                <b>Date Of Birth:</b>
              </span>
              <span>{formatDate(user.dateOfBirth)}</span>
            </p>
            <p className="text-sm text-truncate mb-2">
              <b>Email: </b>
              {user.email}
            </p>
            <p className="text-sm text-truncate mb-4">
              <b>Phone: </b>
              {user.phone}
            </p>
            <p className="text-sm text-truncate">
              <b>Register Date: </b>
              {formatDate(user.registerDate)}
            </p>
          </div>
        </div>
      </div>
    </BlockUI>
  </div>
)
