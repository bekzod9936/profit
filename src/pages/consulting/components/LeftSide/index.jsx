import { Container, Title, Text, WrapTexts } from './style'

const LeftSide = () => {
  return (
    <Container>
      <Title>Сколько стоят услуги</Title>
      <WrapTexts>
        <Text>
          Цена рассчитывается индивидуально в зависимости отсложности, объема и
          сроков работы.
        </Text>
        <Text>
          Разработчик оценивает временные затраты по проекту, а аналитики
          устанавливают стоимость продукта.
        </Text>
      </WrapTexts>
    </Container>
  )
}

export default LeftSide
