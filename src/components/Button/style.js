import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyleButton = styled(motion.button)`
  border: none;
  font-size: 20px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 80px;
  width: fit-content;
  background-color: white;
  text-transform: capitalize;
  color: ${({ color }) => (color ? color : 'rgba(46, 46, 46, 1)')};
  height: ${({ height }) => (height ? height : '70px')} !important;
  width: ${({ width }) => (width ? width : 'fit-content')};
  padding: ${({ padding }) => (padding ? padding : '0 30px')};
  font-weight: 800;
  font-family: 'GilroyBold' !important;

  @media (max-width: ${device.mobile}) {
    font-size: 18px;
    height: ${({ height }) => (height ? height : '60px')};
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
