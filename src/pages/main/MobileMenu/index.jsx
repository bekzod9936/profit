import useMenu from './useMenu'
import NavBar from 'components/NavBar'
import {
  Container,
  Content,
  IconMenu,
  SideDraw,
  IconPhone,
  WrapPhone,
} from './style'

const Menu = () => {
  const { ref, open, handleClick } = useMenu()

  return (
    <>
      <SideDraw ref={ref} open={open}>
        <Content>
          <IconMenu onClick={handleClick} color="black" />
          <NavBar color="black" />
          <WrapPhone href={`tel:${process.env.REACT_APP_API_CALL_CENTER}`}>
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
