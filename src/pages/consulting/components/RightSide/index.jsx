import Form from '../Form'
import Texts from '../Texts'
import { Container, WrapButton } from './style'
import Button from '../Button'
import useWindowWidth from 'utils/hooks/useWindowWidth'
import Success from '../Success'
import { FormProvider } from 'react-hook-form'
import useRightSide from './useRightSide'

const RightSide = () => {
  const { methods, onSubmit, handleClick, successOpen, open } = useRightSide()

  const { handleSubmit } = methods

  const { width } = useWindowWidth()

  return (
    <FormProvider {...methods}>
      <Container height={open || successOpen} onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            type={open ? 'submit' : 'button'}
            color={successOpen && '#219653'}
            onClick={open ? null : handleClick}
          >
            {open ? 'Отправить' : 'Получить'}
          </Button>
        </WrapButton>
      </Container>
    </FormProvider>
  )
}

export default RightSide
