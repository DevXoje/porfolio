'use client'

import { Paper } from '@mui/material'
import { theme } from '@utils/theme'
import { Navbar, Footer } from '@components/organisms'
import { Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material/styles'
import React from 'react'
import { dir } from 'i18next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import '../i18n'
import { getDictionary } from '../i18n/dictionaries'

const RootLayout = ({ children, params }:
        { children: React.ReactNode, params:Params}) => {
  const dictionary = React.use(getDictionary(params.lang))

  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body>
        <CssVarsProvider theme={theme}>
          {getInitColorSchemeScript()}
          <Navbar dictionary={dictionary.navbar} />
          <Paper>

            {children}
          </Paper>
          <Footer />
        </CssVarsProvider>
      </body>
    </html>
  )
}

export default RootLayout

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
