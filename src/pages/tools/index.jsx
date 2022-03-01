import Box from './Box';
import { Container, Title1, Title2, Wrapper } from './style';
import { list } from './constants';

const Tools = () => {
  return (
    <Container id="tools">
      <Title1>Что даст вашему бизнесу</Title1>
      <Title2>внедрение Digital-инструментов</Title2>
      <Wrapper>
        {list.map((v) => (
          <Box title={v} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Tools;
