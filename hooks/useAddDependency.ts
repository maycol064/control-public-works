import { AddDependency } from '@/interfaces';
import { schemaAddDependency } from '@/validations';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  sector: '',
} as AddDependency

export const useAddDependency = () => {

  const handleSubmit = (values: AddDependency) => console.log(values);

  const handleFormik: any = useFormik({
    initialValues,
    validationSchema: schemaAddDependency,
    onSubmit: () => handleSubmit(handleFormik.values),
  });

  return {
    handleFormik,
  };
};
