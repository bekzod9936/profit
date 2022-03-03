import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  border: 1px solid #6e59b6;
  border-radius: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.1), -3px -3px 18px 0 black;
  @media (max-width: ${device.mobile}) {
    height: 230px;
    max-height: 230px;
    min-height: 230px;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 35px;
  max-width: 80%;
  text-align: center;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 30px;
  }
  @media (max-width: ${device.mobile}) {
    max-width: 100%;
    font-size: 25px;
  }
`;
export const Img = styled.img`
  position: absolute;
  left: 0;
  top: -20px;
  @media (max-width: ${device.mobile}) {
    width: 50px;
    height: 50px;
  }
`;
export const containerVariants = {
  hover: {
    scale: 1.05,
  },
};
