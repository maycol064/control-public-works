import { ArchiveOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  name: string;
  date: string;
  progress: number;
  location: string;
  manager: string
}

export const CardProject: FC<Props> = ({ name, date, progress, location, manager }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 3,
        p: 3,
        pb: 0,
        justifyContent: 'space-between',
        alignItems: 'end'
      }}
    >
      <Box>
        <Typography>
          {name} - {manager}
        </Typography>
        <Typography variant="body2">Progreso: {progress}%</Typography>
        <Typography variant="body2">Fecha de inicio: {date}</Typography>
        <Typography variant="body2">Ubicación: {location}</Typography>
      </Box>
      <Box>
        <Tooltip title="Borrar">
          <IconButton>
            <DeleteOutline color="error" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Archivar">
          <IconButton>
            <ArchiveOutlined color="warning" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton>
            <EditOutlined color="success" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
