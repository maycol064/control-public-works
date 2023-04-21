import { ProjectsView } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectAuth } from '@/store/auth/slice';
import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

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
        <Button size="small" sx={{ textTransform: 'none', display: 'flex', gap: 1 }} variant="outlined">
          <Add />
          <span>Nuevo proyecto</span>
        </Button>
      </Box>
      <ProjectsView />
    </Box>
  );
};
