import { StyleButton, buttonVariants } from './style';

const Button = ({ children, onClick, color, type }) => {
  return (
    <StyleButton
      color={color}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      type={type}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
