import NavBar from 'components/NavBar'
import { useEffect, useRef, useState } from 'react'
import {
  Container,
  Content,
  IconMenu,
  SideDraw,
  IconPhone,
  WrapPhone,
} from './style'

const Menu = () => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <SideDraw ref={ref} open={open}>
        <Content>
          <IconMenu onClick={handleClick} color="black" />
          <NavBar color="black" />
          <WrapPhone>
            <IconPhone />
            <p>Позвонить</p>
          </WrapPhone>
        </Content>
      </SideDraw>
      <Container>
        <IconMenu onClick={handleClick} />
      </Container>
    </>
  )
}

export default Menu
