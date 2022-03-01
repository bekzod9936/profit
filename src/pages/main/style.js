import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
  background: linear-gradient(
    45deg,
    var(--blue) 0%,
    black 20%,
    black 80%,
    var(--blue) 100%
  );
`;
export const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const IconLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Title = styled.div`
  color: white;
  font-size: 60px;
  word-break: break-word;
`;
export const Text = styled.div`
  color: white;
  font-size: 24px;
  word-break: break-word;
  width: 70%;
  margin: 30px 0;
`;

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
`;

export const RightSide = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Img1 = styled.img`
  position: absolute;
  right: 30%;
  top: 10%;
  height: 70%;
`;
export const Img2 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  top: 10%;
`;
