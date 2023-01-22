import * as React from 'react'
import { FC, useCallback, useEffect } from 'react'

import { useModalStore } from '../common/ui/modal'
import { useUsersStore } from './model/UserStore'
import { UsersList } from './components/UsersList'
import { UsersModalContainer } from './components/UsersModalContainer'
import { UsersErrorModal } from './components/UsersErrorModal'

export const UsersView: FC = () => {
  const {
    actions: { open }
  } = useModalStore()
  const {
    actions: { loadAll, load, resetUser },
    state: { users, usersFetchStatus, selectedUser, selectUserFetchStatus }
  } = useUsersStore()

  const handleSelectUser = useCallback(
    (selectedUserId: string | undefined) => {
      resetUser()
      open()
      load(selectedUserId)
    },
    [selectedUser]
  )

  useEffect(() => {
    loadAll()
  }, [])

  useEffect(() => {
    if (usersFetchStatus?.hasError) {
      open()
    }
  }, [usersFetchStatus])

  return <>
    <UsersList onSelectUser={handleSelectUser} users={users} />
    {usersFetchStatus?.success && (
      <UsersModalContainer
        selectedUser={selectedUser}
        selectUserFetchStatus={selectUserFetchStatus}
      />
    )}
    {usersFetchStatus?.hasError && <UsersErrorModal />}
  </>
}
