import { list } from './constants'
import { Container } from './style'

const NavBar = ({ color }) => {
  return (
    <Container color={color}>
      {list.map(({ link, title }) => {
        return <a href={`#${link}`}>{title}</a>
      })}
    </Container>
  )
}

export default NavBar
