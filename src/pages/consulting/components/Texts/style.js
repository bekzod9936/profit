import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  color: white;
  width: 100%;
  font-size: 40px;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 30px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  padding-top: 20px;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 20px;
    width: 80%;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 16px;
  }
`;
