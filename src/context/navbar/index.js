import { createContext, useContext, useState } from 'react'

export const NavBarContext = createContext()

export const useNavBar = () => useContext(NavBarContext)

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <NavBarContext.Provider value={[open, setOpen]}>
      {children}
    </NavBarContext.Provider>
  )
}

export default Navbar
