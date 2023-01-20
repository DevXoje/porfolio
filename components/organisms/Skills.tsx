import { Box, Slider, Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import JSX = jsx.JSX;
import { Skill } from '@models/Skill'

const skills: Skill[] = [
  { title: 'Angular', rating: 4 },
  { title: 'React', rating: 3 },
  { title: 'Vue', rating: 2 },
  { title: 'Laravel', rating: 1 }
]
const renderSkills: JSX.Element[] = skills.map(({ title, rating }:Skill) =>
  (
    <Box key={title}>
      <Typography variant='h3'>{title}</Typography>
      <Slider
        aria-label={title + ' rating'}
        defaultValue={rating}
        valueLabelDisplay='auto'
        color='primary'
        step={1}
        marks
        min={1}
        max={10}
        disabled
      />
    </Box>)
)

const Skills = () => (
  <>
    <Typography variant='h2'>Skills</Typography>
    {renderSkills}
  </>)

export default Skills
