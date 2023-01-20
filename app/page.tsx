'use client'

import styles from '../styles/Porfolio.module.scss'
import './global.scss'
import { GalleryProjects, AboutMe, SkillsAndExperience } from '../components/organisms'
import dynamic from 'next/dynamic'

const TimeLineStudies = dynamic(() => import('../components/organisms/TimeLineStudies'), { ssr: false })
const HomePage = () =>
  <>
    <main className={styles.main}>
      <AboutMe />
      <GalleryProjects />
      {/* <TimeLineStudies /> */}
      <SkillsAndExperience />
    </main>

    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>Left</div>
        <div className={styles.right}>Right</div>
      </div>
    </main>
  </>
export default HomePage
/* useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log(entry)
        if (entry.isIntersecting) {
          console.log(entry)
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    console.log(hiddenElements)
    hiddenElements.forEach(el => observer.observe(el))
  }) */
