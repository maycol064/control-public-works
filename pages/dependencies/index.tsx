import { NextPage } from 'next';
import { MainLayout } from '@/layouts';
import { Typography } from '@mui/material';
import { Dependencies } from '@/app';

const DependencysPage: NextPage = () => {
  return (
    <MainLayout title="Dependencias">
      <Dependencies />
    </MainLayout>
  );
};

export default DependencysPage;
