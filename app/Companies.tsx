import { ModalAddCompany, TableCompanies } from "@/components/companies";
import { Box, Typography } from "@mui/material";
import { useState } from "react"


export const Companies = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = (): void => setOpenModal(!openModal);

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
        <ModalAddCompany open={openModal} handleModal={handleModal} />
      </Box>
      <TableCompanies />
      <Typography variant="body2" sx={{ mt: 4 }}>
        *Todas las compañías que se muestran aquí, son ajenas al
        gobierno
      </Typography>
    </Box>
  );
}
