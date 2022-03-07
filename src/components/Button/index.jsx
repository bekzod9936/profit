import { StyleButton, buttonVariants } from './style'

const Button = ({ children, padding, onClick }) => {
  return (
    <StyleButton
      onClick={onClick}
      padding={padding}
      variants={buttonVariants}
      whileHover="hover"
    >
      {children}
    </StyleButton>
  )
}

export default Button
