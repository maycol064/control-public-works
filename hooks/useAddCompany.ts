import { addCompany } from '@/helpers';
import { AddCompany } from '@/interfaces';
import { schemaAddCompany } from '@/validations';
import { useFormik } from 'formik';
import { useAppSelector } from './useAppSelector';
import { selectAuth } from '@/store/auth/slice';
import { useRouter } from 'next/router';

const initialValues = {
  company: '',
  sector: '',
} as AddCompany

export const useAddCompany = (handleModal: () => void) => {
  const { token } = useAppSelector(selectAuth);
  const { reload } = useRouter();

  const handleSubmit = async (values: AddCompany, resetForm: () => void) => {
    console.log('Entró')
    const create = await addCompany(token, values)
    console.log(create)
  }

  const handleFormik: any = useFormik({
    initialValues,
    validationSchema: schemaAddCompany,
    onSubmit: () => handleSubmit(handleFormik.values, handleFormik.resetForm),
  });

  return {
    handleFormik,
  };
};
