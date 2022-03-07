import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyleButton = styled(motion.button)`
  border-radius: 80px;
  color: rgba(46, 46, 46, 1);
  height: 50px;
  width: 210px;
  font-size: 16px;
  @media (max-width: ${device.mobile}) {
    font-size: 21px;
    height: 68px;
    border-radius: 100px;
    width: fit-content;
    padding: 0 20px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    height: 30px;
    width: 120px;
    font-size: 10px;
    border-radius: 50px;
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
