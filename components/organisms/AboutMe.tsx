'use client'

import { Button, Grid, Link, Typography } from '@mui/material'
import styles from '@styles/Aboutme.module.scss'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <Grid container component='section' className={styles.aboutMe}>
      <Grid item xs={12} md={6} className={styles.aboutMe__image}>
        <Image
          src='/images/person.jpeg'
          alt=''
          width={468}
          height={1000}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
          priority
        />
      </Grid>
      <Grid item xs={12} md={6} className={styles.aboutMe__content}>
        <Typography variant='h2' className={styles.title}>Jose Vilches</Typography>
        <Typography variant='h4' className={styles.subtitle}>tsoftware developer</Typography>
        <Typography variant='body1' className={styles.description}>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae atque ullam perferendis harum, nisi porro voluptate, iste consequuntur
          enim reprehenderit architecto consectetur cum? Totam ad molestias natus illum illo
          officia.
        </Typography>
        <Link href=''><Button variant='outlined' className={styles.button}>Hire me</Button></Link>
      </Grid>
    </Grid>
  )
}

export default AboutMe
