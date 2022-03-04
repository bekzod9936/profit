import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  gap: 94px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  justify-content: space-around;

  a {
    cursor: pointer;
    color: ${({ color }) => (color ? color : 'white')};
  }

  @media (max-width: ${device.mobile}) {
    width: 100%;
    flex-direction: column;
    align-items: ${({ color }) => (color ? 'flex-end' : 'center')};
    a {
      margin-bottom: 25px;
    }
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.laptop}) {
    width: 60%;
    gap: 27px;
  }
`;

export const linkVariants = {
  hover: {
    scale: 1.1,
  },
};
