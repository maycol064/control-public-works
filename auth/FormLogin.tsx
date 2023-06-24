import { FC } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { useLogin } from '@/hooks';
import { AlertError } from '@/ui';

export const FormLogin: FC = () => {
  const { handleFormik, error } = useLogin();
  return (
    <>
      <form
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
        onSubmit={handleFormik.handleSubmit}
      >
        <TextField
          type="text"
          label="Usuario"
          id="username"
          name="username"
          fullWidth
          value={handleFormik.values.username}
          onChange={handleFormik.handleChange}
          onBlur={handleFormik.handleBlur}
          error={
            Boolean(handleFormik.touched.username) &&
            Boolean(handleFormik.errors.username)
          }
          helperText={
            Boolean(handleFormik.errors.username) &&
            Boolean(handleFormik.touched.username) &&
            handleFormik.errors.username
          }
        />
        <TextField
          type="password"
          label="Contraseña"
          id="password"
          name="password"
          fullWidth
          value={handleFormik.values.password}
          onChange={handleFormik.handleChange}
          onBlur={handleFormik.handleBlur}
          error={
            Boolean(handleFormik.touched.password) &&
            Boolean(handleFormik.errors.password)
          }
          helperText={
            Boolean(handleFormik.touched.password) &&
            handleFormik.errors.password
          }
        />
        {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
        <Button
          disabled={handleFormik.isSubmitting}
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, textTransform: 'none' }}
        >
          Entrar
        </Button>
      </form>
    </>
  );
};
