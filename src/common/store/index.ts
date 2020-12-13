import { FC } from 'react'

import { configureStoreContext } from './StoreContext'
/**
 * state accessor
 */
export type GetState<S extends object> = () => S

/**
 * state updater callback
 */
export type UpdateState<S extends object> = (
  newOrPartialState: Partial<S>
) => void

/**
 * an action
 */
export type Actions = {
  [key: string]: (...args: any[]) => void
}

/**
 * makeActions creator
 */
export type ActionsCreator<S extends object, ACT extends Actions> = (
  state: GetState<S>,
  setState: (newOrPartialState: Partial<S>) => void
) => ACT

/**
 * model shape
 */
export type Store<S extends object, ACT extends Actions> = {
  state: S
  actions: ACT
}

/**
 * the Store container holds a reference to  the Store Provider component  a
 * High order component that injects the Store in a component that is simply
 * has to be a Functional component with it's own props and model
 */
export type StoreContext<S extends object, ACT extends Actions> = {
  StoreProvider: FC
  useStore: () => Store<S, ACT>
}

export { configureStoreContext }
