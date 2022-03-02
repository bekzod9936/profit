import { StyleButton } from './style'

const Button = ({ children, height, padding, width, onClick }) => {
  return (
    <StyleButton
      width={width}
      height={height}
      onClick={onClick}
      padding={padding}
    >
      {children}
    </StyleButton>
  )
}

export default Button
