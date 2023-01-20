import { Button, Link, Typography } from '@mui/material'
import { Experience } from '@models/Experience'

const experiences: Experience[] = [
  { title: 'titulo1', description: 'Lorem, ipsum dolor sit amet', rangeTime: { from: 5, to: 10 } },
  { title: 'titulo2', description: 'Lorem, ipsum dolor sit amet', rangeTime: { from: 5, to: 10 } }

]

const renderExperiences = experiences.map(({ title, description, rangeTime }, index) => (
  <li key={index}>
    <Typography variant='h3'>
      {title}
    </Typography>
    <Typography variant='subtitle1'>
      {rangeTime.from} {rangeTime.to ? `- ${rangeTime.to}` : '- current'}
    </Typography>
    <Typography variant='body1'>
      {description}
    </Typography>
  </li>
))
const Experiences = () => (
  <div>
    <div className='card-body'>
      <Typography variant='h2'>
        Experiences
      </Typography>
      <ul>
        {/* List Item Experience */}
        {renderExperiences}
      </ul>

      <Link href='https://www.linkedin.com/in/jose-vilches-sanchez/'>
        <Button variant='outlined'>Know More</Button>
      </Link>
    </div>
  </div>
)

export default Experiences
