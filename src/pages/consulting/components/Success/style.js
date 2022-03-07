import { device } from 'utils/style';
import styled from 'styled-components';
import { ReactComponent as Success } from 'assets/icons/success.svg';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 40px;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  line-height: 50px;
  @media (max-width: ${device.mobile}) {
    line-height: 55px;
    font-size: 45px;
    margin: 60px 0 15px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    line-height: 27px;
    font-size: 23px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    line-height: 40px;
    font-size: 30px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 22px;
  line-height: 30px;

  @media (max-width: ${device.mobile}) {
    line-height: 30px;
    font-size: 22px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    line-height: 15px;
    font-size: 11px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    line-height: 20px;
    font-size: 15px;
  }
`;

export const IconSuccess = styled(Success)``;

export const containerVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring' },
  },
};
