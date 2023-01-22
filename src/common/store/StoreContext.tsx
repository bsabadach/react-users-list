import * as React from 'react'
import { Context, useState, useContext, FC } from 'react'
import { Actions, ActionsCreator, StoreContext } from './index'

export const configureStoreContext = <S extends object, ACT extends Actions>(
  initialStoreState: S,
  actionsCreator: ActionsCreator<S, ACT>,
  name?: string
): StoreContext<S, ACT> => {
  const currentState: S = { ...initialStoreState }
  const getState = () => currentState

  const StateContext: Context<{ state: S }> = React.createContext({
    state: getState()
  })

  const ActionsContext: Context<{ actions: ACT }> = React.createContext({
    actions: {} as ACT
  })

  const StoreProvider: FC = ({ children }) => {
    const [state, setState] = useState(initialStoreState)
    const updateState = (newOrPartialState: Partial<S>) => {
      Object.assign(currentState, newOrPartialState)
      setState({
        ...currentState
      })
    }
    const actions = actionsCreator(getState, updateState)
    return (
      <ActionsContext.Provider value={{ actions }}>
        <StateContext.Provider value={{ state }}>
          {children}
        </StateContext.Provider>
      </ActionsContext.Provider>
    )
  }

  StoreProvider.displayName = name

  const useStore = () => ({
    ...useContext(StateContext),
    ...useContext(ActionsContext)
  })

  return { StoreProvider, useStore }
}
