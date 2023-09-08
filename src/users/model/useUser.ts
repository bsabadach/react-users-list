import { useQuery } from 'react-query'
import { usersResource } from '../resource/usersResource'
import { useState } from 'react'

export const useUsers = () => {
  const [selectedUserId, setSelectedUserId] = useState('')
  const listUsers = () => {
    return useQuery(['users'], usersResource.loadAll)
  }

  return {
    listUsers,
    selectedUserId,
    setSelectedUserId
  }
}