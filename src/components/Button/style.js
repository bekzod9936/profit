import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyleButton = styled(motion.button)`
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
  border-radius: 80px;
  width: fit-content;
  background-color: white;
  text-transform: capitalize;
  height: ${({ height }) => (height ? height : '70px')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  padding: ${({ padding }) => (padding ? padding : '0 30px')};
  @media (max-width: ${device.mobile}) {
    font-size: 18px;
    height: ${({ height }) => (height ? height : '60px')};
  }
`

export const buttonVariants = {
  hover: {
    scale: 1.1,
  },
}
