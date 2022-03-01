import { StyleButton } from './style';

const Button = ({ children, height, padding, width }) => {
  return (
    <StyleButton height={height} padding={padding} width={width}>
      {children}
    </StyleButton>
  );
};

export default Button;
