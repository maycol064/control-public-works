import { MainLayout } from '@/layouts';
import { Dashboard } from '@/app';

const HomePage = () => {
  return (
    <MainLayout title="Dashboard">
      <Dashboard />
    </MainLayout>
  );
};

export default HomePage;
