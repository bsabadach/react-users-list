import * as React from 'react'
import { FC, useEffect, useRef, useState } from 'react'
import UsersList from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'
import { BlockUI } from '../common/components/uiblocker/BlockUI'
import { SimpleUser } from './model/user'
import AutocompleteSelector from '../common/components/autocomplete/AutocompleteSelector'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { useLoadAll, filterUsers } = useUsers()
  const [users, setUsers] = useState<SimpleUser[]>([])
  const seeMoreUserId = useRef('')

  const { data, isLoading, isSuccess } = useLoadAll()

  useEffect(() => {
    setUsers(data)
  }, [isSuccess, data])

  const handleSelectUser = (userId: string) => {
    seeMoreUserId.current = userId
    open()
  }

  const handleSelectOption = (user: Partial<SimpleUser>) => {
    setUsers(filterUsers(data, user.firstName))
  }

  const handleOnReset = () => {
    setUsers(data)
  }

  return (
    <div className={'container mx-auto flex flex-col items-end'}>
      <div className={'w-64 mb-8'}>
        <AutocompleteSelector<SimpleUser>
          options={users ?? []}
          onSelect={handleSelectOption}
          onReset={handleOnReset}
          labelKey={'firstName'}
          valueKey={'id'}
          maxHeight="350px"
        />
      </div>
      <BlockUI when={isLoading}>
        <UsersList
          onSelectUser={handleSelectUser}
          users={filterUsers(users ?? [])}
        />
      </BlockUI>
      <UsersModal selectedUserId={seeMoreUserId.current} />
    </div>
  )
}
