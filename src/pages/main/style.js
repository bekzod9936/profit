import { device } from 'utils/style'
import styled, { css } from 'styled-components'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'

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
    height: fit-content;
    background: linear-gradient(
      45deg,
      black 0%,
      black 60%,
      black 40%,
      var(--blue) 100%
    );
  }
`

export const WrapMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: ${device.mobile}) {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1230px;

  justify-content: center;
`

export const IconLogo = styled(Logo)`
  top: 0;
  left: 0;
  position: absolute;
  @media (max-width: ${device.mobile}) {
    left: auto;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 60px;
  line-height: 68px;
  white-space: nowrap;
  word-break: break-word;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  @media (max-width: ${device.laptop}) {
    font-size: 40px;
    line-height: 45px;
  }
  @media (max-width: ${device.mobile}) {
    white-space: unset;
  }
`

export const Text = styled.div`
  width: 70%;
  color: white;
  font-size: 24px;
  line-height: 27px;
  white-space: nowrap;
  word-break: break-word;
  font-weight: 600;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 18px;
  }
  @media (max-width: ${device.mobile}) {
    width: 100%;
    font-size: 20px;
    white-space: unset;
  }
`

export const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${device.mobile}) {
    width: 100%;
    justify-content: flex-start;
    height: calc(100% - 70px);
  }
`

export const RightSide = styled.div`
  width: 40%;
  display: flex;
  position: relative;
  align-items: center;
  @media (max-width: ${device.mobile}) {
    display: none;
  }
`

export const Head = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const WrapNav = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${device.mobile}) {
    display: none;
  }
`

const imgsize = css`
  top: auto;
  height: 70%;
  position: absolute;
  @media (max-width: ${device.mobile}) {
    max-width: 150px;
    max-height: 320px;
    min-width: 150px;
    min-height: 320px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.laptop}) {
    max-width: 170px;
    max-height: 360px;
  }
`

export const Img1 = styled.img`
  right: 35%;
  ${imgsize}


  @media (max-width: ${device.mobile}) {
    left: 18%;
  }
`
export const Img2 = styled.img`
  right: 0;
  ${imgsize}

  @media (max-width: ${device.mobile}) {
    right: 18%;
  }
`

export const WrapButton = styled.div`
  width: 100%;
  margin-top: 54px;
  @media (min-width: ${device.mobile}) {
    min-width: 226px;
    max-width: 226px;
  }
`
export const MobileImages = styled.div`
  color: white;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 350px;
  padding-top: 30px;
  @media (min-width: ${device.mobile}) {
    display: none;
  }
`

export const WrapTexts = styled.div`
  margin-top: 40px;
`
