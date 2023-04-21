import { AccountCircle } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import { FC } from 'react';

interface Props {
  id: string;
  label: string;
  // value: string
  // onChange: (value: string) => void
  // onBlur: (value: string) => void
  // error: string,
  // touched: boolean
}

export const InputWithIcon: FC<Props> = ({ id, label }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        mt: 3,
      }}
    >
      <TextField id={id} label={label} color="primary" size="small" sx={{ width: '250px' }} />
    </Box>
  );
};
