import { HTTP } from '../../common/http/httpClient'
import { User } from '..'

const headers = {
  'app-id': '5f8c5ea1bac30021bd9ea814',
  'Cache-Control': 'no-cache'
}
const ENDPOINT = 'https://dummyapi.io/data/api/user'

export type UsersPayload = {
  data: User[]
  limit?: number
  offset?: number
  page?: number
  total?: number
}

export type UserResource = typeof usersResource

export const usersResource = {
  load: (id: string | undefined) => {
    return HTTP<User>({ headers }).get(`${ENDPOINT}/${id}`)
  },
  loadAll: () => {
    return HTTP<UsersPayload>({ headers }).get(`${ENDPOINT}`)
  }
}
