import { initialStatus, Status } from '../../common/http/remoteData'

export const initialUser = {
  id: '',
  phone: '',
  lastName: '',
  firstName: '',
  location: {
    state: '',
    street: '',
    city: '',
    timezone: '',
    country: ''
  },
  email: '',
  gender: '',
  title: '',
  registerDate: '',
  picture: '',
  dateOfBirth: ''
}

export type User = typeof initialUser
export type SimpleUser = Pick<
  User,
  'id' | 'title' | 'lastName' | 'firstName' | 'email' | 'picture'
>

export type User = {
  usersFetchStatus: Status
  users: SimpleUser[]
  selectedUser: User
  selectUserFetchStatus: Status
}

export const initialState: User = {
  usersFetchStatus: initialStatus,
  users: Array(20).fill(initialUser as SimpleUser),
  selectedUser: initialUser,
  selectUserFetchStatus: initialStatus
}
