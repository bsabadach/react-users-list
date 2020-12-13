import * as React from 'react'

import { ModalContainer } from '../../common/ui/modal'

export const UsersErrorModal = () => (
  <ModalContainer>
    <div className="flex flex-column justify-center items-center h-40">
      <h1 className="text-2xl">Error when retrieving data</h1>
    </div>
  </ModalContainer>
)
