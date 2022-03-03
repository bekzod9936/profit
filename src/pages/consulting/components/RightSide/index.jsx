import Form from '../Form'
import Texts from '../Texts'
import { Container, WrapButton } from './style'
import { useCallback, useState } from 'react'
import Button from 'components/Button'
import { useConsult } from 'context/consult'
import useWindowWidth from 'utils/hooks/useWindowWidth'
import Success from '../Success'

const RightSide = () => {
  const [open, setOpen] = useConsult()
  const [successOpen, setSuccessOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen(true)
    if (open) {
      setSuccessOpen(true)
    }
  }, [setOpen, open])

  const { width } = useWindowWidth()

  return (
    <Container>
      {open ? (
        <>
          {width > 540 ? (
            successOpen ? (
              <Success />
            ) : (
              <Form />
            )
          ) : successOpen ? (
            <Success />
          ) : (
            <>
              <Texts />
              <Form />
            </>
          )}
        </>
      ) : (
        <Texts />
      )}
      <WrapButton>
        <Button onClick={handleClick} width="100%">
          {open ? 'Отправить' : 'Получить'}
        </Button>
      </WrapButton>
    </Container>
  )
}

export default RightSide
