import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import schema from './form.schema'

const useRightSide = () => {
  const [chatId, setChatId] = useState(null)

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
    } catch (error) {
      console.log(error)
    }
  }

  const getBotUpdates = () => {
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
        console.log(res.message.from.id)
      })
  }

  useEffect(() => {
    getBotUpdates()
  }, [])

  return { methods, onSubmit }
}

export default useRightSide
