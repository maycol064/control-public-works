import { NavBar } from '@/ui/NavBar';
import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ width: '100%' }}>
        <NavBar />
        {children}
      </Box>
    </>
  );
};
