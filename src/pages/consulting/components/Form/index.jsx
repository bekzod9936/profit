import Input from 'components/Input'
import { Container, containerVariants } from './style'
import { useFormContext, Controller } from 'react-hook-form'

const Form = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Controller
        name="username"
        control={control}
        render={({ field }) => <Input placeholder="Ваше имя" {...field} />}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input placeholder="номер телефона" {...field} />
        )}
      />
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <Input placeholder="какая из услуг вас заинтересовала ?" {...field} />
        )}
      />
    </Container>
  )
}

export default Form
