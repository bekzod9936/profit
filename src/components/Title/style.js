import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  font-size: 50px;
  word-break: break-word;
  justify-content: center;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  line-height: 68px;
  @media (max-width: ${device.mobile}) {
    font-size: 30px;
  }
`;
