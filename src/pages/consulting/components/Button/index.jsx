import { StyleButton, buttonVariants } from './style'

const Button = ({ children, onClick, color }) => {
  return (
    <StyleButton
      color={color}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
    >
      {children}
    </StyleButton>
  )
}

export default Button
