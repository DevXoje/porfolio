import { jsx } from '@emotion/react'
import JSX = jsx.JSX;
import { TimelineDotProps } from '@mui/lab'

export type Milestone = {
    oppositeContent: string;
    content: { title: string; description: string };
    icon: JSX.Element;
    dotStyles?:TimelineDotProps,
    connectorColor?:string
}
