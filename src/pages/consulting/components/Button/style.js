import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyleButton = styled(motion.button)`
  border-radius: 80px;
  height: 70px;
  font-size: 16px;
  width: 100%;
  font-weight: 800;

  color: ${({ color }) => (color ? color : 'rgba(46, 46, 46, 1)')};
  @media (max-width: ${device.mobile}) {
    font-size: 18px;
    height: 80px;
    border-radius: 90px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    height: 40px;
    font-size: 10px;
    line-height: 13px;
    border-radius: 45px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    height: 55px;
    font-size: 12px;
    border-radius: 80px;
  }
`;

export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
};
