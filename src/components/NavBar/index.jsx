import { list } from './constants'
import { Container, linkVariants } from './style'
import { useCallback } from 'react'
import { useNavBar } from 'context/navbar'
import { motion } from 'framer-motion'

const NavBar = ({ color }) => {
  const [, setOpen] = useNavBar()
  const handleClick = useCallback(() => setOpen(false), [setOpen])

  return (
    <Container color={color}>
      {list.map(({ link, title }) => {
        return (
          <motion.a
            variants={linkVariants}
            whileHover="hover"
            href={`#${link}`}
            onClick={handleClick}
            key={link}
          >
            {title}
          </motion.a>
        )
      })}
    </Container>
  )
}

export default NavBar
