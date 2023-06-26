import * as yup from 'yup';

export const schemaAddWork = yup.object().shape({
  name: yup.string().required('Requerido'),
  location: yup.string().required('Requerido'),
  contratist: yup.string().required('Requerido'),
});
