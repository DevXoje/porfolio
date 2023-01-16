'use client'
import Timeline from '@mui/lab/Timeline'
import { AiFillAccountBook } from 'react-icons/ai'
import Milestone from '../molecules/Milestone'
import { Milestone as MilestoneModel } from '@models/Milestone'

export default function TimeLineStudies () {
  const milestones: MilestoneModel[] = [
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
  const milestonesComplete = milestones.map(ms => <Milestone key={ms.content.title} milestone={ms} />)
  return (
    <section>
      <header>
        <h2>Mi historia</h2>
      </header>
      <Timeline position='alternate'>
        {milestonesComplete}
      </Timeline>
    </section>
  )
}
