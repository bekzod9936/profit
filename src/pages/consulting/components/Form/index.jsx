import { Container, containerVariants } from './style'
import Input from 'components/Input'

const Form = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Input placeholder="Ваше имя" />
      <Input placeholder="номер телефона" />
      <Input placeholder="какая из услуг вас заинтересовала ?" />
    </Container>
  )
}

export default Form
