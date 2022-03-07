import { device } from 'utils/style';
import styled from 'styled-components';

export const StyleInput = styled.input`
  outline: none;
  border-radius: 80px;
  height: 70px;
  border: none;
  padding: 0 20px;
  ::placeholder {
    color: #808080;
    font-size: 16px;
    text-transform: uppercase;
  }
  @media (max-width: ${device.mobile}) {
    height: 80px;
    border-radius: 90px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    height: 40px;
    border-radius: 45px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    height: 55px;
    border-radius: 80px;
  }
`;
