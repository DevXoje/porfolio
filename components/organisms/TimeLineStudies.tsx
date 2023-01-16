'use client'
import Timeline from '@mui/lab/Timeline'
import { AiFillAccountBook } from 'react-icons/ai'
import Milestone from '../molecules/Milestone'
import { Milestone as MilestoneModel } from '@models/Milestone'
import {
  timelineContentClasses,
  timelineOppositeContentClasses
} from '@mui/lab'
import styles from '../../styles/Timeline.module.scss'
import { PositionContext, PositionOptions } from '../../utils/TimelinePosition'
import React from 'react'

export default function TimeLineStudies () {
  const [position, setPosition] = React.useState<PositionOptions>('center')
  const milestones: MilestoneModel[] = getMilestones()
  const handlePosition = React.useContext(PositionContext)
  const handleClick = (event:any) => {
    const position = handlePosition.togglePosition(event)
    console.log(position)
    if (position === 'par') {
      setPosition('left')
    } else {
      setPosition('right')
    }
  }
  const handleOutClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const dotClass = 'MuiTimelineDot-root'
    const target = event.target as HTMLElement
    const parent = target.parentElement as HTMLElement
    const grandpa = parent.parentElement as HTMLElement
    const isDot = target.classList.contains(dotClass)
    const dotIsParent = parent.classList.contains(dotClass)
    const dotIsGrandpa = grandpa.classList.contains(dotClass)
    // console.log(event.target)
    if (!isDot && !dotIsParent && !dotIsGrandpa) {
      setPosition('center')
    }
  }
  const sx = () => {
    if (position === 'right') {
      return {
        [`& .${timelineContentClasses.root}`]: {
          flex: 0.2
        }
      }
    } else if (position === 'left') {
      return {
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }
    } else {
      return {}
    }
  }
  const milestonesComplete = milestones.map(ms => <Milestone key={ms.content.title} milestone={ms} onClick={handleClick} />)

  return (
    <section className={styles.timeline}>
      <header>
        <h2>Mi historia</h2>
      </header>
      <Timeline
        sx={sx}
        onClick={handleOutClick}
      >
        {milestonesComplete}
      </Timeline>
    </section>
  )
}

function getMilestones ():MilestoneModel[] {
  return [
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Inicio',
        description: 'Because you need strength'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Typescript',
        description: 'Because you need strength'
      },
      dotStyles: { color: 'primary' }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Eat',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'primary',
        variant: 'outlined'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Laravel',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'secondary',
        variant: 'filled'
      },
      connectorColor: 'secondary.main'
    }
  ]
}
