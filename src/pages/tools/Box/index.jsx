import { Container, Title, Img } from './style';
import check from 'assets/images/check.png';

const Box = ({ title }) => {
  return (
    <Container>
      <Img src={check} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Box;
