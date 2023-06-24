import { addUser } from '@/helpers';
import { schemaUser } from '@/validations';
import { useFormik } from 'formik';
import { useState } from 'react';

interface FormValues {
  name: string;
  lastname: string;
  username: string;
  password: string;
  company: string;
  role: string;
}

const valuesForm = {
  name: '',
  lastname: '',
  username: '',
  password: '',
  company: '',
  role: '',
} as FormValues;

export const useUserAdd = (token: string) => {
  const [loading, setLoading] = useState<boolean>(true);

  const newUser = async (values: any, token: string) => {
    const user = await addUser(values, token);
    setLoading(false);
  }

  const handleFormik = useFormik({
    initialValues: valuesForm,
    validationSchema: schemaUser,
    validateOnChange: true,
    onSubmit: () => console.log('guardado'),
  });

  return { newUser, handleFormik, loading };
};
