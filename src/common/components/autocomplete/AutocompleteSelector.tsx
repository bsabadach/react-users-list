import React, { useState, useEffect, useRef } from "react";

export type AutoCompleteSelectorProps<T extends Record<string, string>> = {
  options: T[];
  onSelect: (option: Partial<T>) => void;
  onReset: () => void;
  labelKey?: keyof T;
  valueKey?: keyof T;
  maxHeight?: string;
};

const AutoCompleteSelector = <T extends Record<string, string>>({
  options,
  labelKey = "label" as keyof T,
  valueKey = "value" as keyof T,
  onSelect,
  onReset,
  maxHeight = "300px",
}: AutoCompleteSelectorProps<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const sortedOptions = options.sort((opt1: T, opt2: T) => {
    return opt1[labelKey].localeCompare(opt2[labelKey]);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputClicked = () => {
    setShowOptions(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSelect({ [labelKey]: e.target.value, [valueKey]: "" } as Partial<T>);
    setShowOptions(true);
  };

  const handleOptionSelect = (option: T) => () => {
    setInputValue(option[labelKey]);
    onSelect(option);
    setShowOptions(false);
  };

  const handleResetInput = () => {
    setInputValue("");
    onReset();
  };

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
              {sortedOptions?.map((option) => (
                <div
                  key={option[valueKey]}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={handleOptionSelect(option)}
                >
                  {option[labelKey]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteSelector;
