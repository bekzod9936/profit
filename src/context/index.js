import Navbar from './navbar'
import Consult from './consult'

const Context = ({ children }) => {
  return (
    <Navbar>
      <Consult>{children}</Consult>
    </Navbar>
  )
}

export default Context
