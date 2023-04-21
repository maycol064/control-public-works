import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { AuthLayout } from '@/layouts';
import Vest from '../../public/vest.svg';
import { FormLogin } from '@/auth';
import { AppTheme } from '@/theme';

const AuthPage: NextPage = () => {
  return (
    <AppTheme>
      <AuthLayout title="Controlobra">
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={Vest} width={150} height={150} alt="Vest" />
          <Typography variant="h5">Bienvenido</Typography>
        </Box>
        <FormLogin />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Motomamis Devs | {new Date().getFullYear()}
        </Typography>
      </AuthLayout>
    </AppTheme>
  );
};

export default AuthPage;
