import Title from 'components/Title';
import Box from './Box';
import { boxes } from './constants';
import { Container, Wrapper } from './style';

const Services = () => {
  return (
    <Container id="services">
      <Title>Услуги</Title>
      <Wrapper>
        {boxes.map(({ title }) => (
          <Box title={title} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Services;
