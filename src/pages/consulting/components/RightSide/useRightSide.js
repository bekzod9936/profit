import schema from './form.schema'
import { useForm } from 'react-hook-form'
import { useConsult } from 'context/consult'
import { useCallback, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

const useRightSide = () => {
  const [open, setOpen] = useConsult()

  const [successOpen, setSuccessOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen(true)
    if (open) {
      setSuccessOpen(true)
    }
  }, [setOpen, open])

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      phone: '',
      text: '',
    },
  })

  const onSubmit = async (data) => {
    const text = `UserName: ${data.username}\n  Phone: ${data.phone} \n Message: ${data.text}`
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_API_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_API_CHAT_ID}&text=${text}`,
      )
      if (res.status === 200) {
        setSuccessOpen(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { methods, onSubmit, open, handleClick, successOpen }
}

export default useRightSide
