import { AddCompany } from '@/interfaces';
import { schemaAddCompany } from '@/validations';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  sector: '',
} as AddCompany

export const useAddCompany = () => {

  const handleSubmit = (values: AddCompany) => console.log(values);

  const handleFormik: any = useFormik({
    initialValues,
    validationSchema: schemaAddCompany,
    onSubmit: () => handleSubmit(handleFormik.values),
  });

  return {
    handleFormik,
  };
};
