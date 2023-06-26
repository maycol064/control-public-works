import { Box, Container, Divider } from '@mui/material';
import { FC } from 'react';
import { CardProject } from './CardProject';

const projects = [
  {
    name: 'Aeoropuerto de Santa Lucía',
    date: '2019/05/24',
    progress: 50,
    location: 'Teotihuacán, EdoMex',
    manager: 'Maycol Flores',
  },
  {
    name: 'Tren Maya',
    date: '2019/10/05',
    progress: 40,
    location: 'Cancún, QRO',
    manager: 'Axel Victorio'
  },
  {
    name: 'Renovación Línea 1 Metro CDMX',
    date: '2019/10/05',
    progress: 40,
    location: 'Cancún, QRO',
    manager: 'David Torres'
  },
];

export const ProjectsView: FC = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }}>
      {projects.map(({ name, date, progress, location, manager }) => (
        <Container key={name}>
          <CardProject
            key={name}
            name={name}
            date={date}
            progress={progress}
            location={location}
            manager={manager}
          />
          <Divider />
        </Container>
      ))}
    </Box>
  );
};
