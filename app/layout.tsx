'use client'

import React from 'react'
import { Paper, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme, ColorModeContext, ThemeOptions, initialTheme } from '../utils/theme'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  const initialThemeUser:ThemeOptions = 'dark'// initialTheme(window)
  const [mode, setMode] = React.useState<ThemeOptions>(initialThemeUser)
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = React.useMemo(
    () =>
      (mode === 'light') ? lightTheme : darkTheme
    ,
    [mode]
  )
  return (
    <html>

      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>

            <Navbar />
            <Paper>
              {children}
            </Paper>
            <Footer />

          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>

  )
}

/*
*
* import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
} */
