import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from './form.schema';

const useRightSide = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return { methods, onSubmit };
};

export default useRightSide;
