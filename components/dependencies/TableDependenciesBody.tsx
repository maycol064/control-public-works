import { Dependency } from '@/interfaces';
import { BlockOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton, TableBody, TableCell, TableRow, Tooltip } from '@mui/material'
import { FC } from 'react'

interface TableDependenciesProps {
  data: Dependency[],
  loading: boolean
}

export const TableDependenciesBody: FC<TableDependenciesProps> = ({ data, loading }) => {  
  return (
    <TableBody>
        {!loading && data.map(dependency => (
          <TableRow key={dependency.id}>
            <TableCell>{dependency.name}</TableCell>
            <TableCell>{dependency.sector.toUpperCase()}</TableCell>
            <TableCell
              sx={{ display: 'flex', gap: 1 }}
            >
              <Tooltip title='Editar'>
                <IconButton size='small' color='success'>
                  <EditOutlined color='success' />
                </IconButton>
              </Tooltip>
              <Tooltip title='Eliminar'>
                <IconButton size='small' color='error'>
                  <DeleteOutline color='error' />
                </IconButton>
              </Tooltip>
              <Tooltip title='Inhabilitar'>
                <IconButton size='small' color='warning'>
                  <BlockOutlined color='warning' />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  )
}