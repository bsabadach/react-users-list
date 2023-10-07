import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import UsersList from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'
import { BlockUI } from '../common/components/uiblocker/BlockUI'
import SelectDropdown, {
  Option,
} from '../common/components/dropdown/SelectDropdown'
import { SimpleUser } from './model/user'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { useLoadAll, selectedUserId, usersAsOptions, filterUsers } = useUsers()
  const [users, setUsers] = useState<SimpleUser[]>([])
  const [selectedOption, setSelectedOption] = useState<Option>({} as Option)

  const { data, isLoading, isSuccess } = useLoadAll()
  const usersOptions: Option[] = [
    { label: '---none---', value: 'none' },
    ...usersAsOptions([...(data ?? [])]),
  ]

  useEffect(() => {
    setUsers(data)
  }, [isSuccess])

  const handleSelectUser = (userId: string) => {
    selectedUserId.current = userId
    open()
  }

  const handleSelectOption = (value: Option) => {
    setSelectedOption(value)
    setUsers(value.value === 'none' ? data : filterUsers(data, value.label))
  }

  return (
    <div className={'container mx-auto flex flex-col items-end'}>
      <div className={'w-[150px] mb-8 mr-32'}>
        <SelectDropdown
          options={usersOptions}
          selectedOption={selectedOption}
          onSelect={handleSelectOption}
          maxHeight="350px"
        />
      </div>
      <BlockUI when={isLoading}>
        <UsersList
          onSelectUser={handleSelectUser}
          users={filterUsers(users ?? [])}
        />
      </BlockUI>
      <UsersModal selectedUserId={selectedUserId.current} />
    </div>
  )
}
