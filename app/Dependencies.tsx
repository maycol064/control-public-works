import { ModalAddDependency, TableDependencies } from '@/components/dependencies';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export const Dependencies = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handelModal = (): void => setOpenModal(!openModal);

  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto', marginTop: 3 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <ModalAddDependency open={openModal} handleModal={handelModal} />
      </Box>
      <TableDependencies />
      <Typography variant="body2" sx={{ mt: 4 }}>
        *Todas las dependencias que se muestran aquí, son pertenecientes al
        gobierno
      </Typography>
    </Box>
  );
};
