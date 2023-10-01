import * as React from 'react'
import { FC } from 'react'
import UsersList from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'
import { BlockUI } from '../common/components/uiblocker/BlockUI'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { usersResult, selectedUserId } = useUsers()

  const { data: users, isLoading } = usersResult

  const handleSelectUser = (userId: string) => {
    selectedUserId.current = userId
    open()
  }

  return (
    <>
      <BlockUI when={isLoading}>
        <UsersList onSelectUser={handleSelectUser} users={users ?? []} />
      </BlockUI>
      <UsersModal selectedUserId={selectedUserId.current} />
    </>
  )
}
