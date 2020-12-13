import { makeActions } from './usersActions'
import { configureStoreContext, Store } from '../../common/store'

import { UsersState, initialState } from './usersState'
import { usersResource } from '../remote/usersResource'

const userActions = makeActions(usersResource)

export type UserActions = ReturnType<typeof userActions>
export type UserStore = Store<UsersState, UserActions>

export const {
  useStore: useUsersStore,
  StoreProvider: UsersStoreProvider
} = configureStoreContext(initialState, userActions, 'UsersStore')
