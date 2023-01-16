import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Image, { ImageProps } from 'next/image'

export default function PhotoPerson ({ photo }: { photo:ImageProps }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128
          }
        }}
      >
        <Paper elevation={24}>
          <Image
            src='images/person.png' alt={photo.alt}
            style={{ width: '100%', height: 'auto' }}
          />
        </Paper>
      </Box>
    </>
  )
}
