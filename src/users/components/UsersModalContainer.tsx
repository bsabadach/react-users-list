import * as React from 'react'
import { FC, useMemo } from 'react'

import { ModalContainer } from '../../common/ui/modal'
import { UsersModal } from './UsersModal'
import { Status } from '../../common/http/remoteData'
import { User } from '..'

type Props = {
  selectedUser: User
  selectUserFetchStatus: Status
}

export const UsersModalContainer: FC<Props> = ({
  selectedUser,
  selectUserFetchStatus
}) => {
  return (
    <ModalContainer>
      {useMemo(
        () => (
          <UsersModal fetchStatus={selectUserFetchStatus} user={selectedUser} />
        ),
        [selectUserFetchStatus]
      )}
    </ModalContainer>
  )
}
