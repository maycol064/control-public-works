import Image from 'next/image';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Vest from '../public/vest.svg';
import { Logout } from '@mui/icons-material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useAppDispatch, useMatch } from '@/hooks';
import { logout } from '@/store/auth/slice';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const [date, setDate] = useState(moment());
  const dispatch = useAppDispatch();
  const { push } = useRouter()
  const { matchDownMD } = useMatch();

  useEffect(() => {
    if (!matchDownMD) {
      const timerID = setInterval(() => {
        setDate(moment());
      }, 1000);

      return () => {
        clearInterval(timerID);
      };
    }
  }, [matchDownMD]);

  const handleLogout = () => {
    dispatch(
      logout({
        status: 'not-authenticated',
        name: null,
        id: null,
        username: null,
        token: null,
      })
    );
    push('/auth');
  };

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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!matchDownMD && (
                <Typography color="primary">
                  <Moment format="YYYY/MM/DD hh:mm:ss">{date}</Moment>
                </Typography>
              )}
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
