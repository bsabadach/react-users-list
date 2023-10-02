import { useQuery } from '@tanstack/react-query'
import { usersResource } from '../resource/usersResource'
import { useRef } from 'react'

export const useUsers = () => {
  const selectedUserId = useRef('')

  const usersResult = useQuery(['users'], () => usersResource.loadAll())

  return {
    usersResult,
    selectedUserId
  }
}
