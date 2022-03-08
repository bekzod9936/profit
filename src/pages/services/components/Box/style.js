import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import cont from 'assets/icons/cont.svg';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${() => cont});
  justify-content: space-between;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  padding: 40px;
  max-width: 340px;
  max-height: 240px;
  min-height: 240px;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    max-width: 440px;
    max-height: 315px;
    min-height: 315px;
    border-left: 2px solid #4e525b;
    background-size: cover;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding: 20px;
    max-width: 200px;
    max-height: 140px;
    min-height: 140px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding: 30px;
    max-width: 260px;
    max-height: 180px;
    min-height: 180px;
  }
`;

export const Title = styled.div`
  color: white;
  width: 100%;
  font-weight: 600;

  font-size: 35px;
  margin-bottom: 30px;

  @media (max-width: ${device.mobile}) {
    font-size: 33px;
    line-height: 54px;
    margin-bottom: 40px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 26px;
    line-height: 31px;
  }
`;

export const containerVariants = {
  hover: {
    scale: 1.05,
  },
};
