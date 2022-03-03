import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 100px;
  border-top: 1px dashed #e5e5e5;
  border-bottom: 1px dashed #e5e5e5;
  @media (max-width: ${device.mobile}) {
    height: fit-content;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    height: fit-content;
  }
`;
export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-grow: 1;
  border-radius: 30px;
  border: 1px solid white;
  align-items: center;
  box-shadow: 6px 6px 14px 0 rgba(255, 255, 255, 0.1),
    -6px -6px 14px 0 rgba(255, 255, 255, 0.1);
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    flex-direction: column;
  }
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
`;
