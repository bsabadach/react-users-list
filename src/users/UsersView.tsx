import * as React from 'react'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { UsersList } from './components/UsersList'
import { usersResource } from './resource/usersResource'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/ui/modal/ModalContext'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const [selectedUserId, setSelectedUserId] = useState('')
  const { data: users, isSuccess } = useQuery(['users'], usersResource.loadAll)

  const handleSelectUser = (selectedUserId: string) => {
    setSelectedUserId(selectedUserId)
    open()
  }

  return <>
    {isSuccess && <UsersList onSelectUser={handleSelectUser} users={users} />}
    <UsersModal selectedUserId={selectedUserId} />
  </>
}
