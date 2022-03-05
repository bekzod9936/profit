import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  border-bottom-right-radius: 30% 40%;
  border: 1px solid #61656b;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 14px 0 rgba(255, 255, 255, 0.1),
    -6px -6px 14px 0 rgba(255, 255, 255, 0.1);
  justify-content: space-between;
  padding: 40px;
  height: 240px;
  backdrop-filter: blur(120px);
  -webkit-backdrop-filter: blur(120px);
  background: rgba(255, 255, 255, 0.1);
  max-width: 340px;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    padding: 35px;
  }

  @media (min-width: ${device.planshet}) {
    min-height: 240px;
    min-width: 330px;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 35px;
  margin-bottom: 30px;
  width: 100%;
  font-weight: 600;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 30px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
    width: 100%;
  }
`

export const containerVariants = {
  hover: {
    scale: 1.05,
  },
}
