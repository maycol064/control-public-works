import { Typography } from '@mui/material';
import { AppTheme } from '@/theme';
import { useAppSelector } from '@/hooks';
import { selectAuth } from '@/store/auth/slice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from '@/ui';
import { MainLayout } from '@/layouts';
import { Dashboard } from '@/app';

const HomePage = () => {
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
        <MainLayout title="Dashboard">
          <Dashboard />
        </MainLayout>
      )}
    </AppTheme>
  );
};

export default HomePage;
