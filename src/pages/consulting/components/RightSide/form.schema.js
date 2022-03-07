import * as yup from 'yup'

const schema = yup.object().shape({
  username: yup.string().nullable(true).required(),
  phone: yup.string().nullable(true).required(),
  text: yup.string().nullable(true).required(),
})

export default schema
