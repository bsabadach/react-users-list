import * as React from 'react'
import { FC } from 'react'
import { format, toDate } from 'date-fns'

import { User } from '../model/user'
import { BlockUI } from '../../common/components/uiblocker/BlockUI'
import { QueryStatus } from '@tanstack/react-query'

import styles from './user.module.css'
import cx from 'classnames'

const formatDate = (input: string | undefined) => {
  if (!input) return ''
  return format(toDate(new Date(input)), 'yyyy-MM-dd')
}

type Props = {
  user: User | undefined
  fetchStatus: QueryStatus
}

export const UsersModalContent: FC<Props> = ({ fetchStatus, user }) => (
  <div
    className={cx('relative p-4', styles.userModalWrapper)}
    data-testid="user-modal"
  >
    <BlockUI when={fetchStatus === 'loading'}>
      <div>
        <div className="mb-4 flex flex-row overflow-hidden">
          <div className="w-1/3">
            <img
              className="w-full rounded"
              src={user?.picture}
              alt={user?.lastName}
            />
          </div>
          <div className="w-2/3 px-8 text-gray-800">
            <div className="mb-4 text-sm text-gray-500">{user?.id}</div>
            <h2 className="text-truncate mb-4 text-xl ">
              <b>
                {user?.title}. {user?.firstName} {user?.lastName}
              </b>
            </h2>
            <p className="text-truncate mb-2 text-sm">
              <span>
                <b>Date Of Birth:</b>
              </span>
              <span>{formatDate(user?.dateOfBirth)}</span>
            </p>
            <p className="text-truncate mb-2 text-sm">
              <b>Email: </b>
              {user?.email}
            </p>
            <p className="text-truncate mb-4 text-sm">
              <b>Phone: </b>
              {user?.phone}
            </p>
            <p className="text-truncate text-sm">
              <b>Register Date: </b>
              {formatDate(user?.registerDate)}
            </p>
          </div>
        </div>
      </div>
    </BlockUI>
  </div>
)
