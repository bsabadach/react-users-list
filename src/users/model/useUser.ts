import { useQuery } from '@tanstack/react-query'
import { usersResource } from '../resource/usersResource'
import { useRef } from 'react'

export const useUsers = () => {
  const selectedUserId = useRef('')

  const loadById = (selectedUserId: string) => {
    return useQuery(['user', selectedUserId], () =>
      usersResource.load(selectedUserId)
    )
  }

  const usersResult = useQuery(['users'], () => usersResource.loadAll())

  return {
    usersResult,
    loadById,
    selectedUserId
  }
}
