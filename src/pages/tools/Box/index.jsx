import { Container, Title, Img, containerVariants } from './style'
import check from 'assets/images/check.png'

const Box = ({ title }) => {
  return (
    <Container variants={containerVariants} whileHover="hover">
      <Img src={check} />
      <Title>{title}</Title>
    </Container>
  )
}

export default Box
