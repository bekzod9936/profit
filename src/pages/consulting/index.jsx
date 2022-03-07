import { Container, Wrapper } from './style'
import LeftSide from './components/LeftSide'
import { useConsult } from 'context/consult'
import RightSide from './components/RightSide'
import useWindowWidth from 'utils/hooks/useWindowWidth'

const Consulting = () => {
  const { width } = useWindowWidth()
  const [open] = useConsult()

  return (
    <Container id="consulting">
      <Wrapper>
        {width <= 540 && open ? null : <LeftSide />}
        <RightSide />
      </Wrapper>
    </Container>
  )
}

export default Consulting
