import { TimelineOppositeContent } from '@mui/lab'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineContent from '@mui/lab/TimelineContent'
import { Typography } from '@mui/material'
import TimelineItem from '@mui/lab/TimelineItem'
import { Milestone as MilestoneModel } from '@models/Milestone'
import { MouseEventHandler } from 'react'

export default function Milestone ({ milestone, onClick }: { milestone: MilestoneModel, onClick: MouseEventHandler<HTMLSpanElement> }) {
  const { content, icon, oppositeContent, dotStyles, connectorColor } = milestone
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align='right'
        variant='body2'
        color='text.secondary'
      >
        {oppositeContent}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: connectorColor }} />
        <TimelineDot color={dotStyles?.color} variant={dotStyles?.variant} onClick={onClick} sx={{ cursor: 'pointer' }}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant='h6' component='span'>
          {content.title}
        </Typography>
        <Typography>{content.description}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
