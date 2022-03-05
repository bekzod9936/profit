import { StyleButton, buttonVariants } from './style'

const Button = ({ children, onClick }) => {
  return (
    <StyleButton variants={buttonVariants} whileHover="hover">
      {children}
    </StyleButton>
  )
}

export default Button
