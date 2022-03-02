import { createContext, useContext, useState } from 'react'

export const ConsultContext = createContext()

export const useConsult = () => useContext(ConsultContext)

const Consult = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <ConsultContext.Provider value={[open, setOpen]}>
      {children}
    </ConsultContext.Provider>
  )
}

export default Consult
