import { device } from 'utils/style';
import styled, { css } from 'styled-components';
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
  @media (max-width: ${device.mobile}) {
    background: linear-gradient(
      45deg,
      black 0%,
      black 60%,
      black 40%,
      var(--blue) 100%
    );
  }
`;

export const WrapNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  @media (max-width: ${device.mobile}) {
    display: none;
  }
`;
export const WrapMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (min-width: ${device.mobile}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const IconLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${device.mobile}) {
    left: auto;
  }
`;
export const Title = styled.div`
  color: white;
  font-size: 60px;
  word-break: break-word;
  font-family: 'GilroyBold' !important;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 40px;
  }

  @media (max-width: ${device.mobile}) {
    font-size: 24px;
    margin-top: 30px;
  }
`;
export const Text = styled.div`
  color: white;
  font-size: 24px;
  word-break: break-word;
  width: 70%;
  margin: 30px 0;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 18px;
  }
  @media (max-width: ${device.mobile}) {
    width: 100%;
    font-size: 20px;
  }
`;

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;

  @media (max-width: ${device.mobile}) {
    width: 100%;
    justify-content: flex-start;
    height: calc(100% - 70px);
  }
`;

export const RightSide = styled.div`
  position: relative;
  flex-grow: 1;
  @media (max-width: ${device.mobile}) {
    display: none;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const imgsize = css`
  position: absolute;
  height: 70%;
  top: 10%;
  @media (max-width: ${device.mobile}) {
    max-width: 150px;
    max-height: 320px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    max-width: 170px;
    max-height: 360px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    max-width: 230px;
    max-height: 500px;
  }
`;

export const Img1 = styled.img`
  right: 30%;
  ${imgsize}
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    transform: rotate(23deg);
    right: 15%;
    top: 0;
  }
  @media (max-width: ${device.mobile}) {
    left: 24%;
  }
`;
export const Img2 = styled.img`
  right: 0;
  ${imgsize}
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    transform: rotate(30deg);
    right: -40%;
  }
  @media (max-width: ${device.mobile}) {
    right: 24%;
  }
`;

export const WrapButton = styled.div`
  width: 100%;

  @media (min-width: ${device.mobile}) {
    max-width: 220px;
  }
`;
export const MobileImages = styled.div`
  color: white;
  display: flex;
  flex-grow: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (min-width: ${device.mobile}) {
    display: none;
  }
`;
