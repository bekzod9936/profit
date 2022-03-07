import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  color: white;
  width: 100%;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  line-height: 50px;
  font-size: 40px;

  @media (max-width: ${device.mobile}) {
    line-height: 55px;
    font-size: 45px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    line-height: 27px;
    font-size: 23px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    line-height: 40px;
    font-size: 30px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  font-size: 27px;

  padding-top: 20px;
  @media (max-width: ${device.mobile}) {
    line-height: 30px;
    font-size: 22px;
    padding-top: 25px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    line-height: 15px;
    font-size: 11px;
    padding-top: 10px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    line-height: 20px;
    font-size: 15px;
    padding-top: 20px;
  }
`;
