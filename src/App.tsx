import React from 'react'

import Layout from './layout/Layout'
import AppContext from './AppContext'

import './app.css'

export const App = () => (
  <AppContext>
    <Layout />
  </AppContext>
)

export default App
