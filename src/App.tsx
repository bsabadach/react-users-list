import * as React from 'react'

import { UsersStoreProvider } from './users/model/UserStore'
import { UsersView } from './users'

import AppContext from './AppContext'
import { Header } from './layout/Header'

import './app.css'

export const App = () => (
  <AppContext>
    <UsersStoreProvider>
      <Header />
      <main>
        <UsersView />
      </main>
    </UsersStoreProvider>
  </AppContext>
)

export default App
