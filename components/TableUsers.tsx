import { useAppSelector } from '@/hooks';
import { useAxiosUsers } from '@/hooks/useAxiosUsers';
import { selectAuth } from '@/store/auth/slice';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from '@mui/material';
import { FC } from 'react';
import { TableBodyUsers } from './TableBodyUsers';

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align: 'left';
}

const columns: readonly Column[] = [
  { id: 'status', label: 'Estado', minWidth: 100, align: 'left' },
  { id: 'name', label: 'Nombre', minWidth: 250, align: 'left' },
  { id: 'username', label: 'Usuario', minWidth: 200, align: 'left' },
  { id: 'role', label: 'Rol', minWidth: 200, align: 'left' },
  { id: 'actions', label: 'Acciones', minWidth: 200, align: 'left' },
];

export const TableUsers: FC = () => { 
  const { data } = useAxiosUsers();
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size='small'>
          <TableHead>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                sx={{ minWidth: column.minWidth, bgcolor: '#89CED9', color: '#020202' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableHead>
          <TableBodyUsers users={data} />
        </Table>
      </TableContainer>
    </Paper>
  );
};
