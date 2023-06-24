import { useAppSelector } from '@/hooks';
import { selectAuth } from '@/store/auth/slice';
import { AppTheme } from '@/theme';
import { NavBar } from '@/ui/NavBar';
import { Box } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Loader } from '@/ui';

interface Props extends PropsWithChildren {
  title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  const auth = useAppSelector(selectAuth);
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectIfNotAuthenticated = async () => {
      if (auth.status === 'not-authenticated') {
        try {
          return push('/auth');
        } catch (error) {
          console.log(error);
        }
      } else {
        setLoading(false);
      }
    };
    redirectIfNotAuthenticated();
  }, [auth.status, push]);
  return (
    <AppTheme>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <Box sx={{ width: '100%' }}>
            <NavBar />
            {children}
          </Box>
        </>
      )}
    </AppTheme>
  );
};
