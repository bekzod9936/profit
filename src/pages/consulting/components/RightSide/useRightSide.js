import schema from './form.schema'
import { useForm } from 'react-hook-form'
import { useConsult } from 'context/consult'
import { useCallback, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

const useRightSide = () => {
  const [open, setOpen] = useConsult()
  const [chatId, setChatId] = useState(null)

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
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${
          process.env.REACT_APP_API_TOKEN
        }/sendMessage?chat_id=${chatId}&text=${JSON.stringify(data)}`,
      )
      if (res.status === 200) {
        setSuccessOpen(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getBotUpdates = () => {
    try {
      fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_API_TOKEN}/getUpdates`,
      )
        .then((res) => res.json())
        .then((res) =>
          res.result.filter(({ message }) => message?.text !== undefined),
        )
        .then((res) => res.find(({ message }) => message?.text === `/start`))
        .then((res) => {
          setChatId(res.message.from.id)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBotUpdates()
  }, [])

  return { methods, onSubmit, open, handleClick, successOpen }
}

export default useRightSide
