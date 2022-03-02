import { useNavBar } from 'context/navbar'
import { useCallback, useEffect, useRef } from 'react'

const useMenu = () => {
  const ref = useRef(null)
  const [open, setOpen] = useNavBar()

  const handleClickOutside = useCallback(
    (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        Number(ref.current.innerHTML.indexOf('word')) !== -1
      ) {
        setOpen(false)
      }
    },
    [setOpen],
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [setOpen])

  return { ref, open, handleClick }
}

export default useMenu
