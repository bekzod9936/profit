import MobileMenu from './MobileMenu'
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
  WrapNav,
  WrapMenu,
  WrapButton,
  MobileImages,
} from './style'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Head data-aos="fade-left" data-aos-duration="2500">
          <IconLogo />
          <WrapMenu>
            <MobileMenu />
          </WrapMenu>
          <WrapNav>
            <NavBar />
          </WrapNav>
        </Head>
        <Body>
          <LeftSide data-aos="fade-right" data-aos-duration="2500">
            <Title>Разаработка сайтов и мобильных приложений</Title>
            <Text>
              Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
            </Text>
            <MobileImages>
              <Img2 src={phone2} alt="phone2" />
              <Img1 src={phone1} alt="phone1" />
            </MobileImages>
            <WrapButton>
              <Button width="100%">Обсудить проект</Button>
            </WrapButton>
          </LeftSide>
          <RightSide data-aos="fade-left" data-aos-duration="2500">
            <Img2 src={phone2} alt="phone2" />
            <Img1 src={phone1} alt="phone1" />
          </RightSide>
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Header
