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
import { MilestoneContext, MyEventMouse, PositionContext, PositionOptions } from '../../utils/Timeline'
import React, { useRef } from 'react'
import MilestoneDescription from '../molecules/MilestoneDescription'

export default function TimeLineStudies () {
  const milestones = getMilestones()
  const getMilestoneByTitle = (title: string) => {
    const found = milestones.find(ms => ms.content.title === title)
    return found !== undefined ? found : milestones[0]
  }
  const [position, setPosition] = React.useState<PositionOptions>('center')
  const [milestone, setMilestone] = React.useState<MilestoneModel>(milestones[0])
    type MilestoneDescriptionMethods = {
        toggleDrawer: (anchor: PositionOptions, open: boolean) => void
    }
    const childRef = useRef<MilestoneDescriptionMethods>(null)

    const callChildMethod = () => {
      childRef.current?.toggleDrawer(position, true)
    }

    const handlePosition = React.useContext(PositionContext)

    const searchClassTree = (className: string, elementBase: HTMLElement) => {
      let target = elementBase
      let isValid = false
      let validTarget = elementBase
      do {
        isValid = target.classList.length > 0 ? target.classList.contains(className) : false
        if (isValid) {
          validTarget = target
        }
        target = target.parentElement as HTMLElement
      } while (!isValid)

      return validTarget
    }
    const handleClick = (event: MyEventMouse) => {
      const target = event.target as HTMLElement
      const wrapper = searchClassTree('milestone', target)
      const milestoneInfo = handlePosition.togglePosition(wrapper) as { milestone_title: string, position: 'even' | 'odd' }
      const selected = getMilestoneByTitle(milestoneInfo.milestone_title)
      setMilestone(selected)
      // handleMilestone.openDrawer(wrapper)
      console.log(milestoneInfo)
      if (milestoneInfo.position === 'even') {
        setPosition('left')
      } else {
        setPosition('right')
      }
    }
    const handleOutClick = (event: MyEventMouse) => {
      const dotClass = 'MuiTimelineDot-root'
      const target = event.target as HTMLElement
      const parent = target.parentElement as HTMLElement
      const grandpa = parent.parentElement as HTMLElement
      const isDot = target.classList.contains(dotClass)
      const dotIsParent = parent.classList.contains(dotClass)
      const dotIsGrandpa = grandpa.classList.contains(dotClass)
      if (!isDot && !dotIsParent && !dotIsGrandpa) {
        setPosition('center')
      } else {
        handleClick(event)
        callChildMethod()
      }
    }
    const sx = () => {
      if (position === 'right') {
        return {
          [`& .${timelineContentClasses.root}`]: {
            flex: 0.2
          }
        }
      }
      if (position === 'left') {
        return {
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2
          }
        }
      }
      return {}
    }
    const renderMilestones = milestones.map(ms =>
      <Milestone
        key={ms.content.title} milestone={ms}
      />)

    return (
      <section className={styles.timeline}>
        <header>
          <h2>Mi historia</h2>
        </header>
        <Timeline
          sx={sx}
          onClick={handleOutClick}
          position='alternate'
        >
          <MilestoneDescription
            content={milestone.content}
            position='left'
            // ref={childRef}
            // handleChildMethod={handleChildMethod}
          />
          {renderMilestones}
        </Timeline>
      </section>
    )
}

function getMilestones (): MilestoneModel[] {
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

/* function getMilestones () {
  const milestones:MilestoneModel[] = [
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
  return new Promise<MilestoneModel[]>((resolve, reject) => {
    resolve(milestones)
    // reject('Error.')
  })
} */
