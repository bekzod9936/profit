import { Container, Title, Text, IconSuccess, containerVariants } from './style'

const Success = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <IconSuccess />
      <Title>Cпасибо за вашу заявку!</Title>
      <Text>Наш менеджер свяжется с вами в течении 3-ех часов</Text>
    </Container>
  )
}

export default Success
