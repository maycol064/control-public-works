import { Close } from '@mui/icons-material';
import {   Snackbar } from '@mui/material';
import React, { FC } from 'react';

export interface Props {
  message: string;
}

export const AlertError: FC<Props> = ({ message }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
};
