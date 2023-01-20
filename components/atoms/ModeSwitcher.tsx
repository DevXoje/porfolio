import { IconButton, useColorScheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import * as React from 'react'

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleMode} color='inherit'>
      {mode === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </IconButton>
  )
}
export default ModeSwitcher
