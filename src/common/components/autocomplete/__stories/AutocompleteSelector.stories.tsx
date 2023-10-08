import React from 'react'
import AutocompleteSelector from '../AutocompleteSelector'
import { SimpleUser } from '../../../../users/model/user'
import mockUsersList from '../../../../../integration/fixtures/mockUsersResponse.json'

export const Default = () => (
  <AutocompleteSelector<SimpleUser>
    options={mockUsersList.data}
    labelKey={'firstName'}
    valueKey={'id'}
    onReset={() => {}}
    onSelect={() => {}}
  />
)

export default {
  title: 'AutocompleteSelector',
  component: AutocompleteSelector,
}
