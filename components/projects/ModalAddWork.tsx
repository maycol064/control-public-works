import { useAddWork } from '@/hooks';
import { Add } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import { FormAddWork } from './FormAddWork';

export const ModalAddWork = () => {
  const { open, handleOpen, handleFormik } = useAddWork();

  return (
    <>
      <Button
        size="small"
        sx={{ textTransform: 'none', display: 'flex', gap: 1 }}
        variant="outlined"
        onClick={handleOpen}
      >
        <Add />
        <span>Nuevo proyecto</span>
      </Button>
      <Modal open={open} onClose={handleOpen}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            borderRadius: 1,
            textAlign: 'center'
          }}
        >
          <Typography>Nueva obra</Typography>
          <FormAddWork handleFormik={handleFormik} handleOpen={handleOpen} />
        </Box>
      </Modal>
    </>
  );
};
