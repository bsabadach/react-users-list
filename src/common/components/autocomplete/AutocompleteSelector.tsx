import React, { useCallback, useEffect, useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

export type Option<T extends Record<string, string>> = {
  label: keyof T
  value: keyof T
  data: T
}
export type AutoCompleteSelectorProps<T extends Record<string, string>> = {
  items: T[]
  onInput?: (value: string) => void
  onSelect?: (data: T) => void
  onReset?: () => void
  labelKey?: keyof T
  valueKey?: keyof T
  maxHeight?: number
}

const AutoCompleteSelector = <T extends Record<string, string>>({
  items,
  labelKey = 'label' as keyof T,
  valueKey = 'value' as keyof T,
  onInput = () => {},
  onSelect = () => {},
  onReset = () => {},
  maxHeight = 300,
}: AutoCompleteSelectorProps<T>) => {
  const [inputValue, setInputValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [options, setOptions] = useState<Option<T>[]>([])
  const [displayedOptions, setDisplayedOptions] = useState<Option<T>[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  const createOptions = useCallback(
    (items: T[]) => {
      return items.map((item) => ({
        label: item[labelKey],
        value: item[valueKey],
        data: item,
      }))
    },
    [items]
  )

  const filterOptions = useCallback(
    (value: string) => {
      return options.filter((option) => {
        return (option.label as string)
          .toLowerCase()
          .startsWith(value.toLowerCase())
      })
    },
    [options]
  )

  useEffect(() => {
    setOptions(createOptions([...(items ?? [])]))
  }, [items])

  useEffect(() => {
    setDisplayedOptions([...options])
  }, [options])

  const handleInputClicked = () => {
    setShowOptions(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    const displayedOptions = value
      ? filterOptions(e.target.value)
      : [...options]
    setDisplayedOptions(displayedOptions)
    onInput(value)
  }

  const handleOptionSelect = (option: Option<T>) => () => {
    setInputValue(option.label as string)
    onSelect(option.data)
    setShowOptions(false)
  }

  const handleResetInput = () => {
    setInputValue('')
    setDisplayedOptions([...options])
    setShowOptions(false)
    onReset()
  }

  useClickOutside(wrapperRef, () => {
    setShowOptions(false)
  })

  return (
    <div className="flex min-h-[50px] w-full flex-col items-center justify-center">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="relative" ref={wrapperRef}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 p-2 pr-10"
            placeholder="search..."
            onClick={handleInputClicked}
          />

          <button
            data-testid="reset-action"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
            onClick={handleResetInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {showOptions && (
            <div
              style={{ maxHeight }}
              className="absolute z-10 mt-1 w-full overflow-y-scroll rounded-lg border border-gray-300 bg-white shadow-lg"
            >
              {displayedOptions?.map((option) => (
                <div
                  key={option.value as string}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={handleOptionSelect(option as Option<T>)}
                >
                  {option.label as string}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AutoCompleteSelector
