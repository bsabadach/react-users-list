import { RefObject, useCallback, useEffect } from 'react'

const useClickOutside = (
  wrapperRef: RefObject<HTMLDivElement>,
  callbackOnClickOutSide: () => void
): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        callbackOnClickOutSide()
      }
    },
    [wrapperRef, callbackOnClickOutSide]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
    })
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [wrapperRef, handleClickOutside])
}

export default useClickOutside
