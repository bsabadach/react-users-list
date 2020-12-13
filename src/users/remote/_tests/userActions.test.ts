import test from 'ava'

import { initialUser, User, UsersState } from '../../model/usersState'
import { makeMockUserResource } from './mockUserResource'
import { makeActions } from '../../model/usersActions'
import { initialStatus, RemoteData } from '../../../common/http/remoteData'
import { UserResource, UsersPayload } from '../usersResource'

let mockUserResource: UserResource
let mockResponse: RemoteData<User, Error>
let mockLoadAllResponse: RemoteData<UsersPayload, Error>

test.beforeEach(() => {
  mockResponse = {
    status: initialStatus,
    data: initialUser
  }
  mockLoadAllResponse = {
    status: initialStatus,
    data: { data: [] as User[] }
  }
  mockUserResource = makeMockUserResource(mockResponse, mockLoadAllResponse)
})

test.cb('should call setState when invoking action.load()', t => {
  t.plan(2)

  const setState = ({
    selectUserFetchStatus,
    selectedUser
  }: Partial<UsersState>) => {
    if (selectUserFetchStatus?.pending) t.pass()
    if (selectUserFetchStatus?.success) {
      t.is(selectedUser, initialUser)
      t.pass()
      t.end()
    }
  }

  const getState = () => {
    return {} as UsersState
  }

  const actions = makeActions(mockUserResource)(getState, setState)
  actions.load('z')
})
