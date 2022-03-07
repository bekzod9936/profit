import { StyleInput } from './style'

const Input = ({ placeholder, ...props }) => {
  return <StyleInput placeholder={placeholder} {...props} />
}

export default Input
