"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
import styles from '../assets/style/Authors.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation'
import { deleteAuthorApi, getAuthors } from '../services/api/author_request';
type Props = {}

const Authors = (props: Props) => {


  const [authorCards, setAuthorCards] = useState<any>([]);
  const [searchAuthorCards, setSearchAuthorCards] = useState<any>([]);

  const searchRef  = useRef<HTMLInputElement>(null);

  const genderRef  = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    async function loadAuthors() {
      const data = await getAuthors();

      setAuthorCards(data);
      setSearchAuthorCards(data);
    }

    loadAuthors();
  }, []);

  async function deleteAuthor(id: string, index: number) {

    Swal.fire({
      title: "Do you want to delete author?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
      timer:1500
    }).then(async(result) => {

      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        await deleteAuthorApi(id);

        const data = [...authorCards];

        data.splice(index, 1);
        setAuthorCards(data);
        setSearchAuthorCards(data);
      }
    });





  }

  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.authorsContainer}>
        <div className={styles.authorOperations}>
          <input onChange={()=>{ 
            let searchResult = authorCards.filter((author:any)=>{
              if(author.name.toLowerCase().indexOf( searchRef.current?.value.toLowerCase())> -1){
                return author;
              }
            })
            setSearchAuthorCards(searchResult);
            
          }} ref={searchRef} className={styles.authorOperationsInput} placeholder='Search Author' type="text" />
          <select onChange={()=>{
            if(genderRef.current?.value == ""){
               setSearchAuthorCards(authorCards);
            }else{
              let searchResult = authorCards.filter((author:any)=>{
                if(author.gender.toLowerCase() == genderRef.current?.value.toLowerCase()){
                  return author;
                }
              })
              
              setSearchAuthorCards(searchResult);
            }
            
          }} ref={genderRef} className={styles.authorOperationsSelect}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>



        <div className={styles.authorCards}>
          <div className="row">
            {searchAuthorCards && searchAuthorCards.map((card: any, index: any) => {
              return <div key={index} className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className={`card ${styles.authorCard}`} >
                  <img onClick={() => { router.push(`/authors/${card._id}`) }} className={`card-img-top ${styles.authorCardImage}`} src={card.authorImage} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{new Date().getFullYear() - card.birthYear} years old</p>
                    <p className="card-text">Genre: {card.genre}</p>
                    <p className="card-text">Gender: {card.gender}</p>
                    <div className='d-flex justify-content-center '>
                      <button onClick={() => { deleteAuthor(card._id, index) }} className='btn btn-danger'>DELETE</button>
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