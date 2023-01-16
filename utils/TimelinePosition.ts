import * as React from 'react'

export const PositionContext = React.createContext({
  togglePosition: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const element = e.currentTarget
    const parent = element.parentElement as HTMLElement
    const grandpa = parent.parentElement as HTMLElement
    const older = grandpa.parentElement as HTMLElement
    const olderChildren = older.childNodes
    console.log(element)
    for (let i = 0; i < olderChildren.length; i++) {
      const child = olderChildren[i]
      if (child === grandpa) {
        return i !== 0 ? 'par' : 'impar'
      }
    }
  }
})
export type PositionOptions='center'|'left'|'right'
