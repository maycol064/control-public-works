import * as yup from 'yup';

export const schemaAddCompany = yup.object().shape({
  name: yup.string().required('Requerido'),
  sector: yup.string().required('Requerido'),
});
