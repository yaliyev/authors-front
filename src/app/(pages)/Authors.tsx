"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import styles from '../assets/style/Authors.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation'
import { getAuthors } from '../services/api/author_request';
type Props = {}

const Authors = (props: Props) => {

 
  const [authorCards,setAuthorCards] =  useState<any>([]);

  useEffect(()=>{
      async function loadAuthors(){
        const data = await getAuthors();

        setAuthorCards(data);
      }

      loadAuthors();
  },[]);

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
          {authorCards&&authorCards.map((card:any,index:any)=>{
            return <div key={index} onClick={()=>{router.push(`/authors/${card.id}`)}} className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className={`card ${styles.authorCard}`} > 
              <img className={`card-img-top ${styles.authorCardImage}`} src={card.authorImage} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{new Date().getFullYear() - card.birthYear} years old</p>
                  <p className="card-text">Genre: {card.genre}</p>
                  <p className="card-text">Gender: {card.gender}</p>
                  <div className='d-flex justify-content-center '>
                    <button className='btn btn-danger'>DELETE</button>
                  </div>
                </div>
            </div>
          </div>;
          })}
            

           
           

            

            

            

            
          </div>
        </div>
      </div>
    </>


  )
}

export default Authors