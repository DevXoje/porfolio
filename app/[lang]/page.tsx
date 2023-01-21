'use client'

import styles from '@styles/Porfolio.module.scss'
import './global.scss'
import { GalleryProjects, AboutMe, SkillsAndExperience } from '@components/organisms'
import { Locale } from '../i18n/i18n-config'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// const TimeLineStudies = dynamic(() => import('../components/organisms/TimeLineStudies'), { ssr: false })
// const HomePage = async () => {
const HomePage = ({ params: { lang } }: { params: { lang: Locale }}) => {
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(lang).then(r => console.log('change language', r))
  }, [])
  return (
    <main className={styles.main}>
      <AboutMe />
      <SkillsAndExperience />
      <GalleryProjects />
      {/* <TimeLineStudies /> */}
    </main>
  )
}
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
