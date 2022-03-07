import styled from 'styled-components';
import { device } from 'utils/style';

export const Container = styled.form`
  width: 30%;
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  border-radius: inherit;
  border: 2px solid #565656;
  @media (min-width: ${device.laptop}) {
    min-width: 400px;
  }
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    width: 100%;
    grid-gap: 20px;
    height: 100%;
    flex-grow: 1;
    min-height: ${({ height }) => height && '990px'};
    max-height: ${({ height }) => height && '990px'};
  }
`;

export const WrapButton = styled.div`
  margin-top: 50px;
`;
