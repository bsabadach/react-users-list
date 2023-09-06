import * as React from 'react'
import { FC } from 'react'

import { Overlay } from '../../common/ui/modal'
import { UsersModalContent } from './UsersModalContent'
import { useQuery } from 'react-query'
import { usersResource } from '../resource/usersResource'


type Props = {
  selectedUserId: string
}

export const UsersModal: FC<Props> = ({ selectedUserId }) => {
  const { data: user, status } = useQuery(['user', selectedUserId], () => usersResource.load(selectedUserId))
  return (
    <Overlay>
      <UsersModalContent fetchStatus={status} user={user} />
    </Overlay>
  )
}
