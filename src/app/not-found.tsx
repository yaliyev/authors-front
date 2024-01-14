import React from 'react'
import Navbar from './components/Navbar'

type Props = {}

const Custom404 = (props: Props) => {
  return (
    <>
    <Navbar/>
    <div style={{paddingTop:'100px',paddingLeft:'10px'}}>
       The page has been not found.
    </div>
    </>
  )
}

export default Custom404