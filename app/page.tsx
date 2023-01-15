import styles from '../styles/Porfolio.module.scss'
import './global.scss'
import GalleryProjects from '../components/organisms/GalleryProjects'
import React from 'react'
export default function HomePage () {
  return (
    <>
      <GalleryProjects />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>Left</div>
          <div className={styles.right}>Right</div>
        </div>
      </main>
    </>
  )
}
