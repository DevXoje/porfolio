'use client'
import React, { useEffect } from 'react'
import { Box, Fade, useScrollTrigger } from '@mui/material'

const useScrollTop = () => {
  let myWindows
  useEffect(() => {
    myWindows = window
  }, [])
  const trigger = useScrollTrigger({
    target: myWindows,
    disableHysteresis: true,
    threshold: 100
  })
  return { trigger }
}
const ScrollTop = ({ children }:{children:React.ReactNode}) => {
  const { trigger } = useScrollTop()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}
export default ScrollTop
