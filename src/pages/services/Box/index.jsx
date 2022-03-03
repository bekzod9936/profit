import Button from 'components/Button'
import { Container, Title, containerVariants } from './style'

const Box = ({ title }) => {
  return (
    <Container variants={containerVariants} whileHover="hover">
      <Title>{title}</Title>
      <Button height="50px">подробнее</Button>
    </Container>
  )
}

export default Box
