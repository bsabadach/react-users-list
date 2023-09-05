import * as React from 'react'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { UsersList } from './components/UsersList'
import { usersResource } from './resource/usersResource'
import { UsersModal } from './components/UsersModal'

export const UsersView: FC = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState("")
  const { data: users, isSuccess } = useQuery(['users'], usersResource.loadAll)

  const handleSelectUser = (selectedUserId: string) => {
    setSelectedUserId(selectedUserId)
    setModalOpened(true)
  }

  return <>
    {isSuccess && <UsersList onSelectUser={handleSelectUser} users={users} />}
    {modalOpened && <UsersModal selectedUserId={selectedUserId} />}
  </>
}
