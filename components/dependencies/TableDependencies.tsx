import { useTableDependencies } from '@/hooks';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
} from '@mui/material';
import { TableDependenciesBody } from './TableDependenciesBody';

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align: 'left';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nombre', minWidth: 250, align: 'left' },
  { id: 'sector', label: 'Sector', minWidth: 200, align: 'left' },
  { id: 'actions', label: 'Acciones', minWidth: 150, align: 'left' },
];

export const TableDependencies = () => {
  const { data, loading } = useTableDependencies();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small">
          <TableHead>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                sx={{
                  minWidth: column.minWidth,
                  bgcolor: '#89CED9',
                  color: '#020202',
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableHead>
          <TableDependenciesBody data={data} loading={loading} />
        </Table>
      </TableContainer>
    </Paper>
  );
};
