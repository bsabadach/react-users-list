import axios from 'axios'

const headers = {
  'app-id': '63cd1cd766fd050934f194be',
  'Cache-Control': 'no-cache',
}

const http = axios.create({ headers })
const ENDPOINT = 'https://dummyapi.io/data/v1/user'

export const usersResource = {
  load: async (id: string | undefined) => {
    const response = await http.get(`${ENDPOINT}/${id}`)
    return response.data
  },
  loadAll: async () => {
    const response = await http.get(`${ENDPOINT}`)
    return response.data.data
  },
}
