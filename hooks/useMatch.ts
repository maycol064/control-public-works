import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const useMatch = () => {
  const theme = useTheme();
  const matchBetweenSMMD = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const matchBetweenMDLG = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const matchBetweenLGXL = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));

  return {
    matchBetweenLGXL,
    matchBetweenMDLG,
    matchBetweenSMMD,
    matchDownLG,
    matchDownMD,
    matchDownSM,
    matchDownXL
  }
}
