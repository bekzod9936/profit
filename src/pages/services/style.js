import { device } from 'utils/style';
import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: fit-content;
  flex-direction: column;

  padding: 56px 0 71px;
  @media (max-width: ${device.mobile}) {
    padding: 10px 0 80px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding: 40px 0 60px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding: 70px 0 80px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto auto auto;

  grid-gap: 55px 95px;
  margin-top: 58px;

  @media (max-width: ${device.mobile}) {
    display: none;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    grid-gap: 30px 40px;
    margin-top: 50px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    grid-gap: 40px 50px;
    margin-top: 30px;
  }
`;

export const MobileWrap = styled.div`
  display: flex;
  width: 100%;
  padding-top: 65px;
  @media (min-width: ${device.mobile}) {
    display: none;
  }
`;

export const IconArrow = styled(Arrow)`
  transform: ${({ side }) => side === 'left' && 'rotate(-180deg)'};
  width: 50px;
  height: 50px;
`;

export const WrapIcon = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && 'none'};
`;
