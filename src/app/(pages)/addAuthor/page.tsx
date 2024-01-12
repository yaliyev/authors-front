import React from 'react'
import "../../assets/style/reset.css"
import AddAuthor from '../AddAuthor'
import Navbar from '../../components/Navbar'


type Props = {}

const AddAuthorPage = (props: Props) => {
  return (
    <>
     <Navbar/>
     <AddAuthor/>
    </>
  )
}

export default AddAuthorPage