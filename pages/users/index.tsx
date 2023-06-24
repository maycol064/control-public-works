import { NextPage } from 'next';
import { MainLayout } from '@/layouts';
import { Users } from '@/app';

const UsersPage: NextPage = () => {
  return (
    <MainLayout title="Usuarios">
      <Users />
    </MainLayout>
  );
};

export default UsersPage;
