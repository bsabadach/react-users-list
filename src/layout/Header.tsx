import * as React from 'react'

import cx from 'classnames'
import Switch from 'react-switch'

import * as styles from './header.module.css'
import { useState } from 'react'
import { useUsersStore } from '../users/model/UserStore'

export const Header = () => {
  const [simulateError, setSimulateError] = useState(false)
  const {
    actions: { loadAll }
  } = useUsersStore()

  const handleSimulateErrorChanged = (value: boolean) => {
    loadAll(value)
    setSimulateError(value)
  }
  return (
    <nav
      className={cx(
        styles.nav,
        'font-sans h-32 flex justify-between items-center overflow-hidden mb-16'
      )}
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className={styles.title}>USERS LIST APPLICATION</h1>
          <div className="flex flex-row items-center justify-end">
            <h1 className="text-2xl mr-8">Simulate Error </h1>
            <Switch
              checked={simulateError}
              onChange={handleSimulateErrorChanged}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor={'#ff006e'}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
