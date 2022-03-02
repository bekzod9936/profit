import Box from './Box'
import { boxes } from './constants'
import Title from 'components/Title'
import Carousel, { consts } from 'react-elastic-carousel'
import { Container, Wrapper, MobileWrap, IconArrow, WrapIcon } from './style'

const Services = () => {
  const renderArrow = ({ type, onClick, isEdge }) => {
    if (type === consts.PREV) {
      return (
        <WrapIcon disabled={isEdge}>
          <IconArrow side="left" onClick={onClick} />
        </WrapIcon>
      )
    } else {
      return (
        <WrapIcon disabled={isEdge}>
          <IconArrow onClick={onClick} />
        </WrapIcon>
      )
    }
  }

  return (
    <Container id="services">
      <Title>Услуги</Title>
      <Wrapper>
        {boxes.map(({ title }) => (
          <Box title={title} key={title} />
        ))}
      </Wrapper>
      <MobileWrap>
        <Carousel pagination={false} renderArrow={renderArrow} itemsToShow={1}>
          {boxes.map(({ title }) => (
            <Box title={title} key={title} />
          ))}
        </Carousel>
      </MobileWrap>
    </Container>
  )
}

export default Services
