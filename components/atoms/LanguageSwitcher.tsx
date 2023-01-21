'use client'

import * as React from 'react'
import { i18n } from '../../app/i18n/i18n-config'
import { usePathname } from 'next/navigation'
import { Box, FormControl, InputLabel, Link, MenuItem, Select, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'

const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const pathName = usePathname()

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return <Skeleton variant='rectangular' width={100} height={50} />
  }
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  const renderLanguages = () =>
    i18n.locales.map((locale) => {
      const name = locale.split('-')[0]
      return (
        <MenuItem value={name} key={name}>
          <Link href={redirectedPathName(name)}>
            {name}
          </Link>
        </MenuItem>
      )
    })

  const language = ''
  const handleChange = () => {
  }
  return (
    <Box width={150}>
      <FormControl fullWidth>
        <InputLabel id='language_label'>language</InputLabel>
        <Select
          labelId='language'
          id='demo-simple-select'
          value={language}
          label='language'
          onChange={handleChange}
        >
          {renderLanguages()}
        </Select>
      </FormControl>

    </Box>

  )
}

export default LanguageSwitcher
