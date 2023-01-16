import { Box, Grid, Typography } from '@mui/material'
import PhotoPerson from '../molecules/PhotoPerson'

export default function AboutMe () {
  return (
    <>
      <h2>Sobre mi</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid xs={6} item>
            <PhotoPerson photo={{ src: 'images/person.png', alt: '' }} />
          </Grid>
          <Grid xs={6} item>
            <Grid xs={12} item>
              <Typography variant='h2'>titulo</Typography>
              <Typography variant='body1'>paragraph 1</Typography>
              <Typography variant='body2'>paragraph 2</Typography>
            </Grid>
            <Grid xs={12} item>
              {/* <SkillList props={skills.props} /> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
