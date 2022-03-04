import { StyleButton, buttonVariants } from './style';

const Button = ({ children, height, padding, width, onClick, color }) => {
  return (
    <StyleButton
      width={width}
      height={height}
      onClick={onClick}
      padding={padding}
      variants={buttonVariants}
      whileHover="hover"
      color={color}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
