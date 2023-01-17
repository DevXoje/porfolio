import * as React from 'react'

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
