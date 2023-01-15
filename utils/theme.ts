import { createTheme } from '@mui/material/styles'
import * as React from 'react'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fc0303'

    }/* divider: amber[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    }, */

  }
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }/*
    divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }), */
  }
})
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
  }
})
export type ThemeOptions='dark'|'light'
export const initialTheme = (window:Window) => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
