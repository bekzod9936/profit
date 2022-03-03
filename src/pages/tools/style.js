import { device } from 'utils/style';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  @media (max-width: ${device.mobile}) {
    height: fit-content;
  }
`;

const common = css`
  color: white;
  font-size: 50px;
  text-align: center;
  font-family: 'GilroyBold' !important;

  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 35px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 22px;
  }
`;

export const Title1 = styled.div`
  background-color: black;
  border-radius: 20px;
  padding: 10px 20px;
  ${common}

  @media (max-width: ${device.mobile}) {
    width: 90%;
  }
`;
export const Title2 = styled.div`
  ${common}
`;

export const Wrapper = styled.div`
  width: 90%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 40px;
  padding-top: 50px;
  justify-content: center;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    grid-template-columns: 40% 40%;
    grid-gap: 25px;
  }
  @media (max-width: ${device.mobile}) {
    grid-template-columns: 100%;
  }
`;
