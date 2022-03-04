import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: black;
`;
export const Body = styled.div`
  background: rgb(75, 44, 177);
  background: linear-gradient(
    117.5deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(75, 44, 177, 1) 60%
  );

  @media (max-width: ${device.mobile}) {
    padding-bottom: 50px;
  }
`;
