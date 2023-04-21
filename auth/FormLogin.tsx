import { FC } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { FormValues, Login } from '@/interfaces';
import { schemaLogin } from '@/validations';
import { useAppDispatch } from '@/hooks';
import { useRouter } from 'next/router';
import { login } from '@/store/auth/slice';

export const FormLogin: FC = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const valuesForm: FormValues = {
    username: '',
    password: '',
  };

  const handleLogin = (values: FormValues) => {
    dispatch(
      login({
        status: 'authenticated',
        name: 'Maycol Flores',
        id: 'mfr020304',
        username: values.username,
        token: '12343123',
      })
    );
    push('/');
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: valuesForm,
    validationSchema: schemaLogin,
    validateOnChange: true,
    onSubmit: handleLogin,
  });

  return (
    <form
      style={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        label="Usuario"
        id="username"
        name="username"
        fullWidth
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(touched.username) && Boolean(errors.username)}
        helperText={
          Boolean(errors.username) &&
          Boolean(touched.username) &&
          errors.username
        }
      />
      <TextField
        type="password"
        label="Contraseña"
        id="password"
        name="password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(touched.password) && Boolean(errors.password)}
        helperText={Boolean(touched.password) && errors.password}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, textTransform: 'none' }}
      >
        Entrar
      </Button>
    </form>
  );
};
