import { device } from 'utils/style'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding-bottom: 20px;
  @media (max-width: ${device.mobile}) {
    padding-bottom: 50px;
  }
`
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.5 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
}
