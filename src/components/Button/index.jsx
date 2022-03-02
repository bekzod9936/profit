import { StyleButton, buttonVariants } from './style'

const Button = ({ children, height, padding, width, onClick }) => {
  return (
    <StyleButton
      width={width}
      height={height}
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
