import { ThemeProvider, CssBaseline } from "@mui/material"
import { theme } from "./theme"
import { FC, PropsWithChildren } from "react"

export const AppTheme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
