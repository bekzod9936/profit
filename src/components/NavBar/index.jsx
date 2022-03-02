import { list } from './constants'
import { Container } from './style'
import { useCallback } from 'react'
import { useNavBar } from 'context/navbar'

const NavBar = ({ color }) => {
  const [, setOpen] = useNavBar()
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
