import { list } from './constants'
import { Container } from './style'
import { NavBarContext } from 'context/navbar'
import { useCallback, useContext } from 'react'

const NavBar = ({ color }) => {
  const [, setOpen] = useContext(NavBarContext)
  const handleClick = useCallback(() => setOpen(false), [setOpen])

  return (
    <Container color={color}>
      {list.map(({ link, title }) => {
        return (
          <a href={`#${link}`} onClick={handleClick} key={link}>
            {title}
          </a>
        )
      })}
    </Container>
  )
}

export default NavBar
