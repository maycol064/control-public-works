import { AddDependency } from '@/interfaces';
import { schemaAddDependency } from '@/validations';
import { useFormik } from 'formik';
import { useAppSelector } from './useAppSelector';
import { selectAuth } from '@/store/auth/slice';
import { addDependency } from '@/helpers';
import { useRouter } from 'next/router';

const initialValues = {
  name: '',
  sector: '',
} as AddDependency

export const useAddDependency = (handleModal: () => void) => {
  const { token } = useAppSelector(selectAuth);
  const { reload } = useRouter();

  const handleSubmit = async (values: AddDependency, resetForm: () => void) => {
    const create = addDependency(token, values);
    if(create.status === 201)
      resetForm();
      handleModal();
      reload();
  }

  const handleFormik: any = useFormik({
    initialValues,
    validationSchema: schemaAddDependency,
    onSubmit: () => handleSubmit(handleFormik.values, handleFormik.resetForm),
  });

  return {
    handleFormik,
  };
};
