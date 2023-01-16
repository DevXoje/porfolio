'use client'

import Project from '../molecules/Project'
import { Project as ProjectModel } from '@models/Project'
import React from 'react'
import { Grid } from '@mui/material'

export default function GalleryProjects () {
  const projects = getProjects()
  const title = 'titulo galeria'
  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>

      <Grid container spacing={3}>
        {projects}
      </Grid>

    </section>
  )
}

function getProjects () {
  const projects: ProjectModel[] = [
    {
      title: 'titulo 1',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                '              species, ranging across all continents except Antarctica',
      image: { src: 'images/projects/abstract.jpg', alt: '' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      }
    },
    {
      title: 'titulo 2',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                '              species, ranging across all continents except Antarctica',
      image: { src: 'images/projects/gold.jpg', alt: 'Lizards are a widespread group of squamate reptiles' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      }
    },
    {
      title: 'titulo 3',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                '              species, ranging across all continents except Antarctica',
      image: { src: 'images/projects/gold.jpg', alt: 'Lizards are a widespread group of squamate reptiles' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      }
    },
    {
      title: 'titulo 4',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                '              species, ranging across all continents except Antarctica',
      image: { src: 'images/projects/green.jpg', alt: 'Lizards are a widespread group of squamate reptiles' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      }
    }
  ]
  return projects.map(project =>
    <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
      <Project project={project} />
    </Grid>
  )
}

/*
async function getProjects () {
  /* const querySnapshot = await getDocs(collection(database, 'Porfolio'))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  }) *
  const documento = doc(database, 'Projects')
  console.log(documento)
  /*  const getData = async () => {
      await getDoc(databaseRef).then(
        (response) => {
          console.log(response.docs.map((data) => data.data()))
        }
      )
    }
    getData() *

  return projects.map(project => <Project key={project.title} project={project} />)
}

async function getProjects () {
  /* const querySnapshot = await getDocs(collection(database, 'Porfolio'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    }) *
const documento = doc(database, 'Projects')
console.log(documento)
/*  const getData = async () => {
      await getDoc(databaseRef).then(
        (response) => {
          console.log(response.docs.map((data) => data.data()))
        }
      )
    }
    getData() *
const projects = [{
  title: 'titulo 1'
}, {
  title: 'titulo 2'
}]
return projects.map(project => <Project key={project.title} project={project} />)
}
*/

export function ProjectsLayout ({ children }: { children: React.ReactNode }) {
  return (
    { children }
  )
}
