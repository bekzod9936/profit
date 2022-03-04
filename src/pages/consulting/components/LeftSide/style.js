import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 33px 69px 109px;
  height: 100%;
  grid-gap: 50px;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    padding: 30px 20px 30px 50px;
    width: 100%;
    grid-gap: 30px;
  }
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    width: 100%;
    align-items: center;
    grid-gap: 30px;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 800;
  font-family: 'GilroyBold' !important;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 30px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 25px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 20px;
  }
`;
