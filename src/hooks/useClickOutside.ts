import { useEffect, useRef } from 'react'

type UseClickOutsideProps = {
  element: HTMLElement | null
  handler(): void
}

export const useClickOutside = ({ element, handler }: UseClickOutsideProps) => {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    function handlerClickOutSide(evt: MouseEvent | TouchEvent) {
      const { target } = evt
      if (target && !element?.contains(target as Node)) handlerRef.current()
    }

    document.addEventListener('click', handlerClickOutSide)
    document.addEventListener('touchend', handlerClickOutSide)

    return () => {
      document.removeEventListener('click', handlerClickOutSide)
      document.removeEventListener('touchend', handlerClickOutSide)
    }
  }, [element])
}
