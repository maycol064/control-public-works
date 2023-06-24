import { ModalAddUser } from '@/components/ModalAddUser';
import { TableUsers } from '@/components/TableUsers';
import { Box } from '@mui/material';
import { FC, useState } from 'react';

export const Users: FC = () => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const handelModalEdit = (): void => setOpenModalEdit(!openModalEdit)

  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto', px: 3, marginTop: 3 }}>
      <ModalAddUser open={openModalEdit} handleModal={handelModalEdit} />
      <TableUsers />
    </Box>
  );
};
