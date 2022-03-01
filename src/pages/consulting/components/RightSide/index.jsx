import { Container, Title, Text } from './style';
import Button from 'components/Button';

const RightSide = () => {
  return (
    <Container>
      <Title>Получить бесплатную консультацию</Title>
      <Text>
        В рамках консультации уточним необходимую информацию для анализа вашего
        проекта
      </Text>
      <Button width="100%">Получить</Button>
    </Container>
  );
};

export default RightSide;
