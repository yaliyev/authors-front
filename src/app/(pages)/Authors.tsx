"use client"
import React from 'react'
import Navbar from '../components/Navbar'

import styles from '../assets/style/Authors.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation'
type Props = {}

const Authors = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.authorsContainer}>
        <div className={styles.authorOperations}>
          <input className={styles.authorOperationsInput} placeholder='Search Author' type="text" />
          <select className={styles.authorOperationsSelect}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div className={styles.authorCards}>
          <div className="row">
            <div onClick={()=>{router.push('/authors/2')}} className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className={`card ${styles.authorCard}`} > 
                <img className={`card-img-top ${styles.authorCardImage}`} src={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg"} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Joanne Rowling</h5>
                    <p className="card-text">59 years old</p>
                    <p className="card-text">Genre: Fantasy</p>
                    <p className="card-text">Gender: Female</p>
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-danger'>DELETE</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className={`card ${styles.authorCard}`} > 
                <img className={`card-img-top ${styles.authorCardImage}`} src={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg"} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Joanne Rowling</h5>
                    <p className="card-text">59 years old</p>
                    <p className="card-text">Genre: Fantasy</p>
                    <p className="card-text">Gender: Female</p>
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-danger'>DELETE</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className={`card ${styles.authorCard}`} > 
                <img className={`card-img-top ${styles.authorCardImage}`} src={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg"} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Joanne Rowling</h5>
                    <p className="card-text">59 years old</p>
                    <p className="card-text">Genre: Fantasy</p>
                    <p className="card-text">Gender: Female</p>
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-danger'>DELETE</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className={`card ${styles.authorCard}`} > 
                <img className={`card-img-top ${styles.authorCardImage}`} src={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg"} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Joanne Rowling</h5>
                    <p className="card-text">59 years old</p>
                    <p className="card-text">Genre: Fantasy</p>
                    <p className="card-text">Gender: Female</p>
                    <div className='d-flex justify-content-center '>
                      <button className='btn btn-danger'>DELETE</button>
                    </div>
                  </div>
              </div>
            </div>

           

            

            

            

            
          </div>
        </div>
      </div>
    </>


  )
}

export default Authors