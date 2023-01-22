import { HTTP } from '../../common/http/httpClient'
import { User } from '..'

const headers = {
  'app-id': '63cd1cd766fd050934f194be',
  'Cache-Control': 'no-cache'
}
const ENDPOINT = 'https://dummyapi.io/data/v1/user'

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
