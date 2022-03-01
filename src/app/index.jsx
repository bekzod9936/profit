import Consulting from 'pages/consulting';
import Footer from 'pages/footer';
import Main from 'pages/main';
import Services from 'pages/services';
import Tools from 'pages/tools';
import Working from 'pages/working';
import { Container, Body } from './style';

const App = () => {
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
  );
};

export default App;
