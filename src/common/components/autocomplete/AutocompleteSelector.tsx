import React, { useCallback, useEffect, useRef, useState } from 'react'

type Option<T> = {
  label: 'label' | keyof T
  value: 'value' | keyof T
  data: T
}
export type AutoCompleteSelectorProps<T extends Record<string, string>> = {
  items: T[]
  onSelect: (data: T) => void
  onReset: () => void
  labelKey?: keyof T
  valueKey?: keyof T
  maxHeight?: number
}

const AutoCompleteSelector = <T extends Record<string, string>>({
  items,
  labelKey = 'label' as keyof T,
  valueKey = 'value' as keyof T,
  onSelect,
  onReset,
  maxHeight = 300,
}: AutoCompleteSelectorProps<T>) => {
  const [inputValue, setInputValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [options, setOptions] = useState<Option<T>[]>([])
  const [displayedOptions, setDisplayedOptions] = useState<Option<T>[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)

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
    const options: Option<T>[] = [...items].map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
      data: item,
    }))
    setOptions(options)
  }, [items])

  useEffect(() => {
    setDisplayedOptions([...options])
  }, [options])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputClicked = () => {
    setShowOptions(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (!value) {
      setDisplayedOptions([...options])
      setShowOptions(true)
      return
    }

    setDisplayedOptions(filterOptions(e.target.value))
    setShowOptions(true)
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
