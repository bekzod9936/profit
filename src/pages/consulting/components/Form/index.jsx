import { Container } from './style'
import Input from 'components/Input'

const Form = () => {
  return (
    <Container>
      <Input placeholder="Ваше имя" />
      <Input placeholder="номер телефона" />
      <Input placeholder="какая из услуг вас заинтересовала ?" />
    </Container>
  )
}

export default Form
