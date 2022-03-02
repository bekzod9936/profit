import { memo, useEffect } from 'react'
import Main from 'pages/main'
import Tools from 'pages/tools'
import Footer from 'pages/footer'
import Working from 'pages/working'
import Services from 'pages/services'
import { Container, Body } from './style'
import Consulting from 'pages/consulting'
import AOS from 'aos'

const App = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <Container>
      <Main />
      <Body>
        <Services />
        <Working />
        <Tools />
        <Consulting />
      </Body>
      <Footer />
    </Container>
  )
}

export default memo(App)
