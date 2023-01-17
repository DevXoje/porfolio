import { Box, SwipeableDrawer } from '@mui/material'
import React from 'react'
import { MilestoneContent } from '@models/Milestone'
import { MyEventMouse, PositionOptions } from '../../utils/Timeline'

export default function MilestoneDescription ({ content, position }:{content:MilestoneContent, position:PositionOptions, toggle?:MyEventMouse}) {
  const { description, title } = content
  const [state, setState] = React.useState({
    left: false,
    right: false
  })
  const anchor = position !== 'center' ? position : 'left'
  /*  toggle(toggleDrawer) */
  const toggleDrawer =
        (anchor: PositionOptions, open: boolean) =>
          (event: React.KeyboardEvent | React.MouseEvent) => {
            console.log('algo mas')
            if (
              event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
            ) {
              return
            }

            setState({ ...state, [anchor]: open })
          }
  const drawerContent = (anchor: PositionOptions) => (
    <Box
      // ref={ref}
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {title}
      {description}
    </Box>
  )
  return (
    <React.Fragment
      key={anchor}

    >
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {drawerContent(anchor)}
      </SwipeableDrawer>
    </React.Fragment>
  )
}
