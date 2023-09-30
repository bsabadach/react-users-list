import * as React from 'react'
import { FC } from 'react'
import { UsersList } from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { usersResult, selectedUserId } = useUsers()

  const { data: users } = usersResult

  const handleSelectUser = (userId: string) => {
    selectedUserId.current = userId
    open()
  }

  return (
    <>
      <UsersList onSelectUser={handleSelectUser} users={users ?? []} />
      <UsersModal selectedUserId={selectedUserId.current} />
    </>
  )
}
