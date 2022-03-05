import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyleButton = styled(motion.button)`
  border: none;
  font-size: 20px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  background-color: white;
  text-transform: capitalize;
  color: rgba(46, 46, 46, 1);
  height: 50px;
  width: 210px;
  font-weight: 800;
  font-family: 'GilroyBold' !important;
  font-size: 16px;
  @media (max-width: ${device.mobile}) {
    font-size: 21px;
    height: 68px;
    border-radius: 100px;
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
