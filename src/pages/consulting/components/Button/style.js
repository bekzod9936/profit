import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyleButton = styled(motion.button)`
  border-radius: 80px;
  height: 50px;
  font-size: 16px;
  width: 100%;

  color: ${({ color }) => (color ? color : 'rgba(46, 46, 46, 1)')};
  @media (max-width: ${device.mobile}) {
    font-size: 21px;
    height: 80px;
    border-radius: 100px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    height: 30px;
    font-size: 18.296px;
    line-height: 27px;
    border-radius: 80px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    height: 40px;
    width: 160px;
    font-size: 12px;
    border-radius: 60px;
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
