import { GroupAdd, PersonAdd } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import { FC } from 'react';
import { FormAddDependency } from './FormAddDependency';

interface PropsModal {
  open: boolean;
  handleModal: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #89CED9',
  borderRadius: '4px',
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
};

export const ModalAddDependency: FC<PropsModal> = ({ open, handleModal }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Button
          size="small"
          sx={{ textTransform: 'none', display: 'flex', gap: 1 }}
          variant="outlined"
          onClick={handleModal}
        >
          <GroupAdd />
          <span>Agregar dependencia</span>
        </Button>
      </Box>
      <Modal open={open} onClose={handleModal}>
        <Box sx={style}>
          <Typography variant="h6">Registro de dependencia</Typography>
          <FormAddDependency handleModal={handleModal} />
        </Box>
      </Modal>
    </>
  );
};
