import * as React from 'react'
import { FC, useState } from 'react'
import UsersList from './components/UsersList'
import { UsersModal } from './components/UsersModal'
import { useModalContext } from '../common/components/modal/ModalContext'
import { useUsers } from './model/useUser'
import { BlockUI } from '../common/components/uiblocker/BlockUI'
import SelectDropdown, {
  Option,
} from '../common/components/dropdown/SelectDropdown'

export const UsersView: FC = () => {
  const { open } = useModalContext()
  const { useLoadAll, selectedUserId, usersAsOptions } = useUsers()
  const [selectedOption, setSelectedOption] = useState<Option>({} as Option)

  const { data: users, isLoading } = useLoadAll()
  const usersOptions: Option[] = usersAsOptions(users)

  const handleSelectUser = (userId: string) => {
    selectedUserId.current = userId
    open()
  }

  const handleSelectOption = (value: Option) => {
    setSelectedOption(value)
  }

  return (
    <div className={'container mx-auto flex flex-col items-end'}>
      <div className={'w-[150px] max-h-[500px] mb-8 mr-32'}>
        <SelectDropdown
          options={usersOptions}
          selectedOption={selectedOption}
          onSelect={handleSelectOption}
        />
      </div>
      <BlockUI when={isLoading}>
        <UsersList onSelectUser={handleSelectUser} users={users ?? []} />
      </BlockUI>
      <UsersModal selectedUserId={selectedUserId.current} />
    </div>
  )
}
