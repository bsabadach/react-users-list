import * as React from 'react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

import UsersList from './components/UsersList'
import UsersModal from './components/UsersModal'
import { SimpleUser, User } from './model/User'
import { useUsers } from './model/useUser'

import AutocompleteSelector from '@/common/components/autocomplete/AutocompleteSelector'
import { useModalContext } from '@/common/components/modal/ModalContext'
import BlockUI from '@/common/components/uiblocker/BlockUI'

const UsersView: FC = () => {
  const { open } = useModalContext()
  const { useLoadAll, filterUsers } = useUsers()
  const [displayedUsers, setDisplayedUsers] = useState<SimpleUser[]>([])
  const seeMoreUserId = useRef('')

  const { data: users, isLoading, isSuccess } = useLoadAll()

  useEffect(() => {
    setDisplayedUsers([...(users ?? [])])
  }, [users, isSuccess])

  const handleSeeMoreOfUser = useCallback(
    (userId: string) => {
      seeMoreUserId.current = userId
      open()
    },
    [open]
  )

  const handleSelectAutocompleteOption = useCallback(
    (user: Partial<User>) => {
      setDisplayedUsers(filterUsers(users, user.firstName))
    },
    [users, filterUsers]
  )

  const handleAutocompleteInputChanged = useCallback(
    (value: string) => {
      setDisplayedUsers(filterUsers(users, value))
    },
    [users, filterUsers]
  )

  const handleOnReset = useCallback(() => {
    setDisplayedUsers(users)
  }, [users])

  return (
    <div className="container relative mx-auto flex flex-col items-end mb-16">
      <div className={'mb-8 w-64'}>
        <AutocompleteSelector<SimpleUser>
          items={users}
          onInput={handleAutocompleteInputChanged}
          onSelect={handleSelectAutocompleteOption}
          onReset={handleOnReset}
          labelKey={'firstName'}
          valueKey={'id'}
          maxHeight={350}
        />
      </div>
      <BlockUI when={isLoading}>
        <UsersList
          onSelectUser={handleSeeMoreOfUser}
          users={displayedUsers ?? []}
        />
      </BlockUI>
      {seeMoreUserId.current && (
        <UsersModal selectedUserId={seeMoreUserId.current} />
      )}
    </div>
  )
}

export default UsersView
