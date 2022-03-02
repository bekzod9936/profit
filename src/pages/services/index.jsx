import Title from 'components/Title'
import Box from './Box'
import { boxes } from './constants'
import { Container, Wrapper, MobileWrap, IconArrow } from './style'
import Carousel, { consts } from 'react-elastic-carousel'

const Services = () => {
  const renderArrow = ({ type, onClick, isEdge }) => {
    if (type === consts.PREV) {
      return <IconArrow side="left" onClick={onClick} />
    } else {
      return <IconArrow onClick={onClick} />
    }
  }

  return (
    <Container id="services">
      <Title>Услуги</Title>
      <Wrapper>
        {boxes.map(({ title }) => (
          <Box title={title} />
        ))}
      </Wrapper>
      <MobileWrap>
        <Carousel pagination={false} renderArrow={renderArrow} itemsToShow={1}>
          {boxes.map(({ title }) => (
            <Box title={title} />
          ))}
        </Carousel>
      </MobileWrap>
    </Container>
  )
}

export default Services
