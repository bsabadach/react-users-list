import * as React from 'react'
import { FC, useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { UsersList } from './components/UsersList'
import { usersResource } from './resource/usersResource'
import { UsersModal } from './components/UsersModal'
import { useMakeModalContext } from '../common/ui/modal/ModalContext'

export const UsersView: FC = () => {
  const {open}=useContext(useMakeModalContext().ModalContext);
  const [selectedUserId, setSelectedUserId] = useState("")
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
