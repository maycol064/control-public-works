import { NextPage } from 'next';
import { MainLayout } from '@/layouts';
import { Typography } from '@mui/material';
import { Companies } from '@/app/Companies';

const CompanysPage: NextPage = () => {
  return (
    <MainLayout title="Compañías">
      <Companies />
    </MainLayout>
  );
};

export default CompanysPage;
