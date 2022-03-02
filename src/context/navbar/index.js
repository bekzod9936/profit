import { createContext, useState } from 'react'

export const NavBarContext = createContext()

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <NavBarContext.Provider value={[open, setOpen]}>
      {children}
    </NavBarContext.Provider>
  )
}

export default Navbar
