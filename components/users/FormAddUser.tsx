import { useAppSelector } from '@/hooks';
import { useUserAdd } from '@/hooks/useUserAdd';
import { selectAuth } from '@/store/auth/slice';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { ChangeEvent, FC } from 'react';

export const FormAddUser = ({ handleModal }: { handleModal: () => void }) => {
  const { token } = useAppSelector(selectAuth);
  const { handleFormik, newUser, loading } = useUserAdd(token);
  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } =
    handleFormik;

  return (
    <>
      <form
        style={{
          width: '80%',
          margin: '0 auto',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <TextField
          size="small"
          fullWidth
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Nombre"
        />
        <TextField
          size="small"
          fullWidth
          id="lastname"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Apellido"
        />
        <TextField
          size="small"
          fullWidth
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Nombre de usuario"
        />
        <TextField
          type="password"
          size="small"
          fullWidth
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Contraseña"
        />
        <FormControl size="small">
          <FormLabel id="type-company">
            ¿Pertenece a una dependencia o empresa?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="type-company"
            name="type-company"
            id="type-company"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue('typeCompany', event.target.value)
            }
            onBlur={handleBlur}
          >
            <FormControlLabel
              value="dependency"
              control={<Radio />}
              label="Dependencia"
            />
            <FormControlLabel
              value="company"
              control={<Radio />}
              label="Empresa"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel id="company">Empresa</InputLabel>
          <Select
            labelId="company"
            id="company"
            value={values.company}
            label="Age"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <MenuItem value={10}>Una empresa pública</MenuItem>
            <MenuItem value={20}>Segunda empresa pública</MenuItem>
            <MenuItem value={30}>Uana empresa privada</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel id="role">Rol</InputLabel>
          <Select
            labelId="role"
            id="role"
            value={values.role}
            label="Age"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Directivo'}>Directivo</MenuItem>
            <MenuItem value={'Supervisor'}>Supervisor</MenuItem>
            <MenuItem value={'Superintendente'}>Superintendente</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: '1rem' }}>
          Registrar
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ textTransform: 'none', mt: '-0.5rem' }}
          color="warning"
          onClick={handleModal}
        >
          Cancelar
        </Button>
      </form>
    </>
  );
};
