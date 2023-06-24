import * as yup from 'yup';

export const schemaUser = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  lastname: yup.string().required('El apellido es requerido'),
  username: yup
    .string()
    .min(5, 'El nombre de usuario debe contener mínimo 5 carácteres')
    .required('Requerido'),
  password: yup
    .string()
    .min(4, 'La contraseña debe contener mínimo 5 carácteres')
    .required('Requerido'),
  role: yup.string().required('El role es requerido')
});
