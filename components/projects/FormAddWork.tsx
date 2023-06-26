import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const exampleContratist = [
  { name: 'Constructora Pato', value: 'const_pato' },
  { name: 'Maquinaria José', value: 'maq_jose' },
  { name: 'Grupo Carso', value: 'grupo_carso' },
];

export const FormAddWork = ({
  handleFormik,
  handleOpen,
}: {
  handleFormik: any;
  handleOpen: () => void;
}) => {
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
          id="location"
          name="location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Ubicación"
        />
        <FormControl size="small">
          <InputLabel id="contratist">Contratista</InputLabel>
          <Select
            size="small"
            fullWidth
            id="contratist"
            name="contratist"
            value={values.contratist}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Contratista"
          >
            {exampleContratist.map((contratist) => (
              <MenuItem key={contratist.value} value={contratist.value}>
                {contratist.name}
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
          onClick={handleOpen}
        >
          Cancelar
        </Button>
      </form>
    </>
  );
};
