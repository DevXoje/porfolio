import * as React from 'react'
import { Milestone as MilestoneModel } from '@models/Milestone'
import { timelineContentClasses, timelineOppositeContentClasses } from '@mui/lab'

export type MyEventMouse=React.MouseEvent<HTMLSpanElement, MouseEvent>

export const PositionContext = React.createContext({
  togglePosition: (wrapper:HTMLElement) => {
    const older = wrapper.parentElement as HTMLElement
    const olderChildren = older.childNodes
    for (let i = 0; i < olderChildren.length; i++) {
      const child = olderChildren[i]
      if (child === wrapper) {
        const title = wrapper.querySelector('.milestone__title') as HTMLElement
        return {
          milestone_title: title.innerHTML,
          position: i % 2 !== 0 ? 'even' : 'odd'
        }
      }
    }
  }
})
export type PositionOptions='center'|'left'|'right'

export const MilestoneContext = React.createContext({
  toggleMilestone: (e: MyEventMouse) => {
    console.log(e)
  },
  openDrawer: (e: any) => {
    console.log('openDrawer', e.parentElement)
  }
})

export const useMilestone = () => {
  const [milestone, setMilestone] = React.useState<MilestoneModel>({
    oppositeContent: 'placeholder',
    content: {
      title: 'placeholder',
      description: 'placeholder'
    }
  })
  return {
    setMilestone,
    milestone
  }
}
export type MileStoneInfo={
  milestone_title: string,
  position: 'even'|'odd'
}
export const usePosition = () => {
  const [position, setPosition] = React.useState<PositionOptions>('center')

  const positionContext = PositionContext
  const handlePosition = React.useContext(positionContext)
  const styleToPosition = () => {
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
  /* useEffect(() => {

  }, []) */
  return { positionContext, position, setPosition, handlePosition, styleToPosition }
}
export type MilestoneDescriptionMethods = {
  toggleDrawer: (anchor: PositionOptions, open: boolean) => void
}
