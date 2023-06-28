import { MainLayout } from '@/layouts';
import { Dashboard } from '@/app';

const HomePage = () => {
  return (
    <MainLayout title="Controlobras">
      <Dashboard />
    </MainLayout>
  );
};

export default HomePage;
