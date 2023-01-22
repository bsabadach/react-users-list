import { GetState, UpdateState } from '../../common/store'
import { initialStatus } from '../../common/http/remoteData'

import { UserResource } from '../resource/usersResource'
import { initialState, initialUser, User, UsersState } from '../index'

export const makeActions = (usersResource: UserResource) => (
  _: GetState<UsersState>,
  updateState: UpdateState<UsersState>
) => ({
  load(id: string | undefined) {
    usersResource.load(id).subscribe(({ data, status }) => {
      if (status.pending) {
        updateState({
          selectedUser: {} as User,
          selectUserFetchStatus: status
        })
        return
      }
      if (status.success) {
        updateState({
          selectedUser: data,
          selectUserFetchStatus: status
        })
        return
      }
      if (status.hasError) {
        updateState({
          selectUserFetchStatus: status
        })
      }
    })
  },
  loadAll(simulateError: boolean = false) {
    usersResource.loadAll().subscribe(({ status, data }) => {
      if (simulateError) {
        status.hasError = true
        status.success = false

        updateState({
          ...initialState,
          selectUserFetchStatus: status,
          usersFetchStatus: status
        })
        return
      }
      if (status.pending) {
        updateState({
          ...initialState,
          usersFetchStatus: status
        })
        return
      }
      if (status.success) {
        updateState({
          users: data.data,
          usersFetchStatus: status
        })
        return
      }
      if (status.hasError) {
        updateState({
          usersFetchStatus: status
        })
      }
    })
  },
  selectUser(selectedUser: User) {
    updateState({
      selectedUser
    })
  },
  resetUser() {
    updateState({
      selectUserFetchStatus: initialStatus,
      selectedUser: initialUser
    })
  }
})
