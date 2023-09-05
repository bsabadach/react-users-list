import { User } from '..'
import axios from 'axios'

const headers = {
  'app-id': '63cd1cd766fd050934f194be',
  'Cache-Control': 'no-cache'
}

const http=axios.create({headers: headers})
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
  load: async (id: string | undefined) => {
    const response=await http.get(`${ENDPOINT}/${id}`)
    return response.data;
  },
  loadAll: async() => {
    const response=await http.get(`${ENDPOINT}`)
    return response.data.data;
  }
}
