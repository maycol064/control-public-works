import { AddWork } from '@/interfaces';
import { schemaAddWork } from '@/validations';
import { useFormik } from 'formik';
import { useState } from 'react';

const initialValues = {
  name: '',
  location: '',
  contratist: ''
} as AddWork

export const useAddDependency = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = (values: AddWork) => console.log(values);

  const handleFormik: any = useFormik({
    initialValues,
    validationSchema: schemaAddWork,
    onSubmit: () => handleSubmit(handleFormik.values),
  });

  return {
    open,
    handleOpen,
    handleFormik,
  };
};
