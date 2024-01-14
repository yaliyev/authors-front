import AddBook from '@/app/(pages)/AddBook'
import Navbar from '@/app/components/Navbar'
import React from 'react'

type Props = {}

const AddBookPage = (props: Props) => {
  return (
    <>
    <Navbar/>
    <AddBook/>
    </>
    
  )
}

export default AddBookPage