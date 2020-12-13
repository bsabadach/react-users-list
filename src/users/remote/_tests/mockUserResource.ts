import * as Observable from 'zen-observable'
import { RemoteData } from '../../../common/http/remoteData'
import { UserResource, UsersPayload } from '../../remote/usersResource'
import { initialUser, User } from '../../model/usersState'

export const makeMockUserResource = (
  mockLoadResponse: RemoteData<User, Error>,
  mockLoadAllResponse: RemoteData<UsersPayload, Error>
): UserResource => ({
  load: (_: string | undefined) => {
    return new Observable(subscriber => {
      mockLoadResponse.status.pending = true
      subscriber.next(mockLoadResponse)
      mockLoadResponse.status.pending = false
      mockLoadResponse.status.success = true
      mockLoadResponse.data = initialUser
      subscriber.next(mockLoadResponse)
    })
  },
  loadAll: () => {
    return new Observable(subscriber => {
      mockLoadResponse.status.pending = true
      subscriber.next(mockLoadAllResponse)
      mockLoadAllResponse.status.success = true
      mockLoadAllResponse.data = { data: [initialUser] }
      subscriber.next(mockLoadAllResponse)
    })
  }
})
