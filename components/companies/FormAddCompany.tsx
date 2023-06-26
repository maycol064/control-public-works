import { useAddDependency, useAppSelector } from '@/hooks';
import { selectAuth } from '@/store/auth/slice';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const services = [
  { name: 'Construcción', value: 'construccion' },
  { name: 'Plomería', value: 'plomeria' },
  { name: 'Cerrajería', value: 'cerrajeria' },
  { name: 'Electrica', value: 'electrica' },
];

export const FormAddCompany = ({
  handleModal,
}: {
  handleModal: () => void;
}) => {
  const { token } = useAppSelector(selectAuth);
  const { handleFormik } = useAddDependency();
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
        <FormControl size="small">
          <InputLabel id="sector">Sector</InputLabel>
          <Select
            size="small"
            fullWidth
            id="sector"
            name="sector"
            value={values.sector}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Sector"
          >
            {services.map((service) => (
              <MenuItem key={service.value} value={service.value}>
                {service.name}
              </MenuItem>
            ))}
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
