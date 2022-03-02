import { NavBarContext } from 'context/navbar'
import { useCallback, useContext, useEffect, useRef } from 'react'

const useMenu = () => {
  const ref = useRef(null)
  const [open, setOpen] = useContext(NavBarContext)

  const handleClickOutside = useCallback(
    (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        ref.current.innerHTML.indexOf('word') != -1
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
