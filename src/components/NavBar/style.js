import { device } from 'utils/style';
import styled from 'styled-components';

export const Container = styled.div`
  gap: 90px;
  width: 50%;
  display: flex;
  justify-content: center;
  a {
    cursor: pointer;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    color: ${({ color }) => (color ? color : 'white')};
  }

  @media (max-width: ${device.mobile}) {
    width: 100%;
    flex-direction: column;
    gap: 0;

    align-items: ${({ color }) => (color ? 'flex-end' : 'center')};
    a {
      margin-bottom: 30px;
    }
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    gap: 50px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    gap: 70px;
  }
`;

export const linkVariants = {
  hover: {
    scale: 1.1,
  },
};
