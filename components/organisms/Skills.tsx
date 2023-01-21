import { Box, Slider, Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import JSX = jsx.JSX;
import { Skill } from '@models/Skill'
import React, { Suspense } from 'react'

const getData = async () => {
  const skills: Skill[] = [
    { title: 'Angular', rating: 4 },
    { title: 'React', rating: 3 },
    { title: 'Vue', rating: 2 },
    { title: 'Laravel', rating: 1 }
  ]
  return skills
  /* const res = await fetch('https://api.github.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json() */
}
const Skills = () => {
  const skills = React.use(getData())
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
  return (
    <>
      <Typography variant='h2'>Skills</Typography>
      <Suspense fallback={<div>Loading...</div>}>
        {renderSkills}
      </Suspense>
    </>
  )
}

export default Skills
