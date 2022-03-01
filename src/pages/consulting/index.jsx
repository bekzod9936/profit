import { Container, Wrapper } from './style';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Consulting = () => {
  return (
    <Container id="consulting">
      <Wrapper>
        <LeftSide />
        <RightSide />
      </Wrapper>
    </Container>
  );
};

export default Consulting;
