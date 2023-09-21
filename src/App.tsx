import React from 'react'
import AppContext from './AppContext'
import { Layout } from './layout/Layout'

import './app.css'

export const App = (): JSX.Element => (
  <AppContext>
    <Layout />
  </AppContext>
)

export default App
