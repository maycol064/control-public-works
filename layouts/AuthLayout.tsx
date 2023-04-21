import { Box } from '@mui/material';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface PropsLayout extends PropsWithChildren {
  title: string;
}

export const AuthLayout: FC<PropsLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </Box>
    </>
  );
};
