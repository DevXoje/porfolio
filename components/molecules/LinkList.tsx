import { Link as LinkModel } from '@models/Link'
import { Link } from '@mui/material'

const LinkList = () => {
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
  const allLinks = pages.map((link) =>
    <Link
      key={link.text}
      component='button'
      variant='body1'
      color='text.primary'
    >
      {link.text}
    </Link>)

  return (
    <>
      {allLinks}
    </>
  )
}
export default LinkList
