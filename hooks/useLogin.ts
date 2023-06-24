import { useFormik } from 'formik';
import { FormValues, Login } from '@/interfaces';
import { schemaLogin } from '@/validations';
import { useAppDispatch } from '@/hooks';
import { useRouter } from 'next/router';
import { login } from '@/store/auth/slice';
import { loginApi } from '@/helpers';
import { useState } from 'react';

export const useLogin = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);

  const valuesForm: FormValues = {
    username: '',
    password: '',
  };

  const handleLogin = async (values: FormValues) => {
    const { data, status } = await loginApi(values);
    
    if (status == 200) {
      dispatch(login({
        status: 'authenticated',
        name: `${data.user?.name} ${data.user?.lastname}`,
        username: `${data.user?.username}`,
        id: `${data.user?.id}`,
        token: data.token,
        role: `${data.user?.role}`
      }))
      push('/');
    } else {
      setError(data.message);
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleFormik = useFormik({
    initialValues: valuesForm,
    validationSchema: schemaLogin,
    validateOnChange: true,
    onSubmit: handleLogin,
  });

  return {
    handleFormik,
    error
  };
};
