import Image from 'next/image';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import Vest from '../public/vest.svg';
import { Logout } from '@mui/icons-material';
import {  useNavbar } from '@/hooks';

export const NavBar = () => {
  const { role, handleLogout } = useNavbar()
  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                gap: 3,
              }}
            >
              <Link
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Image src={Vest} width={45} height={45} alt="Vest" />
                <Typography variant="h6">Controlobras</Typography>
              </Link>
              {role == 'Admin' && (
                <Link href="/users" sx={{ textDecoration: 'none' }}>
                  <Typography variant="body1">Usuarios</Typography>
                </Link>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton onClick={handleLogout}>
                <Logout color="primary" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
