import Title from 'components/Title'
import { Container, Wrapper } from './style'
import { list } from './constants'
import Box from './Box'

const Working = () => {
  return (
    <Container id="working">
      <Title>Как мы работаем</Title>
      <Wrapper>
        {list.map((values) => (
          <Box values={values} key={values?.title} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Working
