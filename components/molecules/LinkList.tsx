import { Link as LinkModel } from '@models/Link'
import { Link, Skeleton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import * as React from 'react'
const pages: LinkModel[] = [
  {
    text: 'Home',
    route: ''
    // icon: <ImHome />
  },
  {
    text: 'About me',
    route: ''
    // icon: <BsPersonBadgeFill />
  },
  {
    text: 'Soft Skills',
    route: ''
    // icon: <ImHeart />
  },
  {
    text: 'Projects',
    route: ''
    // icon: <GiTechnoHeart />
  },
  {
    text: 'Contact',
    route: ''
    // icon: <GrContact />
  }
]

const LinkList = () => {
  const [mounted, setMounted] = useState(false)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    const skeletons = pages.map((value, index, array) => <Skeleton variant='rectangular' width={50} height={50} key={index} sx={{ marginRight: 2 }} />)
    return <>{skeletons}</>
  }
  const allLinks = pages.map((link) =>
    <Link
      key={link.text}
      component='button'
      variant='body1'
      color='text.primary'
    >

      {t(link.text)}
    </Link>)

  return (
    <>
      {allLinks}
    </>
  )
}
export default LinkList
