import { Container, Title, WrapIcon } from './style';

const Box = ({ values }) => {
  const { title, Icon } = values;

  return (
    <Container>
      <WrapIcon>
        <Icon />
      </WrapIcon>
      <Title>{title}</Title>
    </Container>
  );
};

export default Box;
