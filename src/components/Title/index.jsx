import { Container } from './style'

const Title = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Title
