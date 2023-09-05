import React from 'react'
import { StrictMode } from 'react'

import { UsersView } from './users'

import AppContext from './AppContext'
import { Header } from './layout/Header'

import './app.css'

export const App = () => (
  <StrictMode>
    <AppContext>
      <Header />
      <main>
        <UsersView />
      </main>
    </AppContext>
  </StrictMode>
)

export default App
