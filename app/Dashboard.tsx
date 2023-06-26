import { ModalAddWork, ProjectsView } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectAuth } from '@/store/auth/slice';
import { Box, Typography } from '@mui/material';

export const Dashboard = () => {
  const auth = useAppSelector(selectAuth);
  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto', marginTop: 3 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2
        }}
      >
        <Typography variant="h6">Hola {auth.name}, tus proyectos:</Typography>
        <ModalAddWork />
      </Box>
      <ProjectsView />
    </Box>
  );
};
