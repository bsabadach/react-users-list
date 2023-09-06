import { useQuery } from 'react-query'
import { usersResource } from '../resource/usersResource'

export const useUsers=()=>{
  const { data: users, isSuccess,isLoading,isError } = useQuery(['users'], usersResource.loadAll)

  return {users,isSuccess,isLoading,isError}
}