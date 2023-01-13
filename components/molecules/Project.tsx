import { Project as ProjectModel } from '@models/Project'
import { Skeleton } from '@mui/material'

export default function Project () {
  const project: ProjectModel = {
    title: 'titulo'
  }
  const { title } = project
  return (
    project
      ? (
        <article>
          <h3>{title}</h3>
        </article>
        )
      : (<Skeleton variant='rectangular' width={210} height={118} />)
  )
}
