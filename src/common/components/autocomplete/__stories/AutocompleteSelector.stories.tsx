import React from 'react'

import AutocompleteSelector from '../AutocompleteSelector'

import { SimpleUser } from '@/users/model/User'
import mockUsersList from '@@/integration/fixtures/mockUsersResponse.json'

export const Default = () => (
  <AutocompleteSelector<SimpleUser>
    items={mockUsersList.data}
    labelKey={'firstName'}
    valueKey={'id'}
    onReset={() => {}}
    onSelect={() => {}}
  />
)

export default {
  title: 'AutocompleteSelector',
  tags: ['autodocs'],
  component: AutocompleteSelector,
}
