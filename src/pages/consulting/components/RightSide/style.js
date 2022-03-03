import styled from 'styled-components';
import { device } from 'utils/style';

export const Container = styled.div`
  width: 30%;
  padding: 30px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  border-radius: inherit;
  border: 2px solid #565656;
  flex-shrink: 1;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    width: 100%;
  }
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    width: 100%;
    grid-gap: 20px;
    height: 100%;
    flex-grow: 1;
  }
`;
