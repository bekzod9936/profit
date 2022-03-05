import Button from '../Button'
import { Container, Title, containerVariants } from './style'

const Box = ({ title }) => {
  return (
    <Container variants={containerVariants} whileHover="hover">
      <Title>{title}</Title>
      <Button>подробнее</Button>
    </Container>
  )
}

export default Box
