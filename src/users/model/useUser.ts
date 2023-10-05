import { useQuery } from '@tanstack/react-query'
import { usersResource } from '../resource/usersResource'
import { useRef } from 'react'

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

  return {
    useLoadAll,
    useLoadById,
    selectedUserId,
  }
}
