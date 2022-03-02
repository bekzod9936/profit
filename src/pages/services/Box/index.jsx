import Button from 'components/Button'
import { Container, Title, Wrap } from './style'

const Box = ({ title }) => {
  return (
    <Container>
      <Wrap>
        <Title>{title}</Title>
        <Button height="50px">подробнее</Button>
      </Wrap>
    </Container>
  )
}

export default Box
