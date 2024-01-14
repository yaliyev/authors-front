import EditAuthor from '@/app/(pages)/EditAuthor'
import Navbar from '@/app/components/Navbar'
import React from 'react'

type Props = {}

const EditAuthorPage = (props: Props) => {
  return (
   <>
   <Navbar/>
   <EditAuthor/>
   </>
  )
}

export default EditAuthorPage