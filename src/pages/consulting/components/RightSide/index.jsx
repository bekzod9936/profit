import Form from '../Form'
import Texts from '../Texts'
import { Container } from './style'
import { useCallback } from 'react'
import Button from 'components/Button'
import { useConsult } from 'context/consult'
import useWindowWidth from 'utils/hooks/useWindowWidth'

const RightSide = () => {
  const [open, setOpen] = useConsult()

  const handleClick = useCallback(() => setOpen(true), [setOpen])
  const { width } = useWindowWidth()

  return (
    <Container>
      {open ? (
        <>
          {width > 540 ? (
            <Form />
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
      <Button onClick={handleClick} width="100%">
        {open ? 'Отправить' : 'Получить'}
      </Button>
    </Container>
  )
}

export default RightSide
