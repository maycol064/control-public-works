import { TableUsers } from '@/interfaces/users'
import { BlockOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton, TableBody, TableCell, TableRow, Tooltip } from '@mui/material'
import { FC } from 'react'

export const TableBodyUsers: FC<TableUsers> = ({ users }) => {  
  return (
    <TableBody>
        {users && users.map(user => (
          <TableRow key={user.id}>
            <TableCell>*</TableCell>
            <TableCell>{user.name} {user.lastname}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.role}</TableCell>
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
