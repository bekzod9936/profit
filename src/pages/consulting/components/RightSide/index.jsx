import Form from '../Form';
import Texts from '../Texts';
import { Container, WrapButton } from './style';
import { useCallback, useState } from 'react';
import Button from '../Button';
import { useConsult } from 'context/consult';
import useWindowWidth from 'utils/hooks/useWindowWidth';
import Success from '../Success';
import { FormProvider } from 'react-hook-form';
import useRightSide from './useRightSide';

const RightSide = () => {
  const [open, setOpen] = useConsult();
  const [successOpen, setSuccessOpen] = useState(false);

  const { methods, onSubmit } = useRightSide();

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClick = useCallback(() => {
    setOpen(true);
    if (open) {
      setSuccessOpen(true);
    }
  }, [setOpen, open]);

  const { width } = useWindowWidth();

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
            onClick={handleClick}
          >
            {open ? 'Отправить' : 'Получить'}
          </Button>
        </WrapButton>
      </Container>
    </FormProvider>
  );
};

export default RightSide;
