import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import AutoCompleteSelector from '../AutocompleteSelector'

describe('AutoCompleteSelector', () => {
  const items = [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 3', value: 'value3' },
  ]

  it('renders the AutoCompleteSelector component without crashing', () => {
    render(
      <AutoCompleteSelector
        items={items}
        onSelect={() => {}}
        onReset={() => {}}
      />
    )

    const inputElement = screen.getByPlaceholderText('search...')
    expect(inputElement).toBeInTheDocument()

    const resetButton = screen.getByTestId('reset-action')
    expect(resetButton).toBeInTheDocument()
  })

  it('displays options when the input field is clicked', () => {
    render(
      <AutoCompleteSelector
        items={items}
        onSelect={() => {}}
        onReset={() => {}}
      />
    )

    const inputElement = screen.getByPlaceholderText('search...')
    fireEvent.click(inputElement)

    const option1 = screen.getByText('Option 1')
    const option2 = screen.getByText('Option 2')
    const option3 = screen.getByText('Option 3')

    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
    expect(option3).toBeInTheDocument()
  })

  it('selects an option when an option is clicked', () => {
    const onSelectMock = jest.fn()

    render(
      <AutoCompleteSelector
        items={items}
        onSelect={onSelectMock}
        onReset={() => {}}
      />
    )

    const inputElement = screen.getByPlaceholderText('search...')
    fireEvent.click(inputElement)

    const option2 = screen.getByText('Option 2')
    fireEvent.click(option2)

    expect(onSelectMock).toHaveBeenCalledWith(items.at(1))
  })

  it('resets the input when the reset button is clicked', () => {
    const onResetMock = jest.fn()

    render(
      <AutoCompleteSelector
        items={items}
        onSelect={() => {}}
        onReset={onResetMock}
      />
    )

    const inputElement = screen.getByPlaceholderText('search...')
    fireEvent.change(inputElement, { target: { value: 'Option 1' } })

    const resetButton = screen.getByTestId('reset-action')
    fireEvent.click(resetButton)

    expect(inputElement).toHaveValue('')

    expect(onResetMock).toHaveBeenCalled()
  })
})
