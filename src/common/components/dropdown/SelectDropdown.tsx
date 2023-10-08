import React, { FC, useState } from 'react'

export type Option = {
  value: string
  label: string
}

type SelectDropdownProps = {
  options: Option[]
  selectedOption: Option
  onSelect: (option: Option) => void
  maxHeight?: string
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  maxHeight,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: Option) => () => {
    onSelect(option as Option)
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full h-auto">
      <div
        className="block w-full min-h-[40px] bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label}</span>
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          style={{ maxHeight: maxHeight }}
          className={`absolute z-10 w-full max-h-[250px] bg-white border border-gray-300 rounded-lg mt-1 overflow-x-hidden overflow-y-scroll`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              onClick={handleSelect(option)}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
