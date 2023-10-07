import { useQuery } from '@tanstack/react-query'
import { usersResource } from '../resource/usersResource'
import { useRef } from 'react'
import { SimpleUser } from './user'
import { Option } from '../../common/components/dropdown/SelectDropdown'

export const useUsers = () => {
  const selectedUserId = useRef('')

  const useLoadById = (selectedUserId: string) => {
    return useQuery(['user', selectedUserId], () =>
      usersResource.load(selectedUserId),
    )
  }

  const useLoadAll = () => {
    return useQuery(['users'], () => usersResource.loadAll())
  }

  const usersAsOptions = (users: SimpleUser[]) => {
    return users
      ?.map((user: SimpleUser) => ({
        label: user.firstName,
        value: user.id,
      }))
      .sort((option1: Option, option2: Option) => {
        return option1.label.localeCompare(option2.label)
      })
  }

  return {
    useLoadAll,
    useLoadById,
    selectedUserId,
    usersAsOptions,
  }
}
