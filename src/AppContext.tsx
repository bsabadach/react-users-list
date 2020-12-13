import * as React from 'react'
import { FC } from 'react'

import { ModalStoreProvider } from './common/ui/modal'

const AppContext: FC = ({ children }) => (
  <ModalStoreProvider>{children}</ModalStoreProvider>
)

export default AppContext
