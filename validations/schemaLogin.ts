import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  username: yup
    .string()
    .min(5, 'El nombre de usuario debe contener mínimo 5 carácteres')
    .required('Requerido'),
  password: yup
    .string()
    .min(4, 'La contraseña debe contener mínimo 5 carácteres')
    .required('Requerido'),
});
