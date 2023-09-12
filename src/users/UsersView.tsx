import * as React from 'react'
import { FC } from 'react'
import { UsersList } from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/ui/modal/ModalContext'
import { useUsers } from './model/useUser'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { listUsers, selectedUserId } = useUsers()

  const { data: users } = listUsers()

  const handleSelectUser = (userId: string) => {
    selectedUserId.current = userId
    open()
  }

  return <>
    <UsersList onSelectUser={handleSelectUser} users={users ?? []} />
    <UsersModal selectedUserId={selectedUserId.current} />
  </>
}
