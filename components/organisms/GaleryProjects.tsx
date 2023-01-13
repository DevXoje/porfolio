import { jsx } from '@emotion/react'
import { Project as ProjectModel } from '@models/Project'
import JSX = jsx.JSX;
import Project from '../molecules/Project'
import { collection, getDoc } from '@firebase/firestore'
import { database } from '../../utils/firebaseConfig'
const databaseRef = collection(database, 'projects')
export default function GaleryProjects () {
  const getData = async () => {
    await getDoc(databaseRef).then(
      (response) => {
        console.log(response.docs.map((data) => data.data()))
      }
    )
  }
  getData()
  const projects: ProjectModel[] = [{
    title: 'titulo 1'
  }, {
    title: 'titulo 2'
  }]
  const projectComplete: JSX.Element[] = projects.map(project => <Project key={project.title} />)
  const title = 'titulo galeria'
  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      {projectComplete}
    </section>
  )
}
