import styles from '../styles/Porfolio.module.scss'
import './global.scss'
import GalleryProjects from '../components/organisms/GalleryProjects'
import React from 'react'
import TimeLineStudies from '../components/organisms/TimeLineStudies'
export default function HomePage () {
  return (
    <>
      <GalleryProjects />
      <TimeLineStudies />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>Left</div>
          <div className={styles.right}>Right</div>
        </div>
      </main>
    </>
  )
}
