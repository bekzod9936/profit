import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyleButton = styled(motion.button)`
  font-size: 20px;
  border-radius: 80px;
  color: rgba(46, 46, 46, 1);
  height: 70px !important;
  width: 100%;
  padding: 0 30px;

  @media (max-width: ${device.mobile}) {
    font-size: 18px;
  }
`

export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
}
