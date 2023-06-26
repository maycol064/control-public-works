import * as yup from 'yup';

export const schemaAddDependency = yup.object().shape({
  company: yup.string().required('Requerido'),
  sector: yup.string().required('Requerido'),
});
