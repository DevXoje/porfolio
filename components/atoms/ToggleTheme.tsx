import * as React from 'react'

import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { IconButton, useTheme } from '@mui/material'
import { ColorModeContext } from '../../utils/theme'

export default function ToggleTheme () {
  const theme = useTheme()
  const handleColorMode = React.useContext(ColorModeContext)
  return (
    <IconButton sx={{ ml: 1 }} onClick={handleColorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </IconButton>
  )
}
