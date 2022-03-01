import Button from 'components/Button'
import NavBar from 'components/NavBar'
import phone1 from 'assets/images/phone1.png'
import phone2 from 'assets/images/phone2.png'
import {
  Container,
  Wrapper,
  IconLogo,
  Title,
  Text,
  Body,
  Head,
  LeftSide,
  RightSide,
  Img1,
  Img2,
} from './style'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <IconLogo />
          <NavBar />
        </Head>
        <Body>
          <LeftSide>
            <Title>Разаработка сайтов и мобильных приложений</Title>
            <Text>
              Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
            </Text>
            <Button>Обсудить проект</Button>
          </LeftSide>
          <RightSide>
            <Img2 src={phone2} alt="phone2" />
            <Img1 src={phone1} alt="phone1" />
          </RightSide>
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Header
