import Button from 'components/Button'
import { Container, Title } from './style'

const Box = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button height="50px">подробнее</Button>
    </Container>
  )
}

export default Box
