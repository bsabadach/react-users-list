import * as React from 'react'
import { FC, memo, useEffect, useRef, useState } from 'react'
import UsersList from './components/UsersList'
import UsersModal from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'
import BlockUI from '../common/components/uiblocker/BlockUI'
import { SimpleUser, User } from './model/user'
import AutocompleteSelector from '../common/components/autocomplete/AutocompleteSelector'

const UsersView: FC = () => {
  const { open } = useModalContext()
  const { useLoadAll, filterUsers } = useUsers()
  const [displayedUsers, setDisplayedUsers] = useState<SimpleUser[]>([])
  const seeMoreUserId = useRef('')

  const { data: users, isLoading, isSuccess } = useLoadAll()

  useEffect(() => {
    setDisplayedUsers([...(users ?? [])])
  }, [users, isSuccess])

  const handleSeeMoreOfUser = (userId: string) => {
    seeMoreUserId.current = userId
    open()
  }

  const handleSelectAutocompleteOption = (user: Partial<User>) => {
    setDisplayedUsers(filterUsers(users, user.firstName))
  }

  const handleAutocompleteInputChanged = (value: string) => {
    setDisplayedUsers(filterUsers(users, value))
  }

  const handleOnReset = () => {
    setDisplayedUsers(users)
  }

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

export default memo(UsersView)
