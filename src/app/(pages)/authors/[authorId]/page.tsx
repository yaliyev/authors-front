"use client"
import Navbar from '@/app/components/Navbar'

import React, { useEffect, useState } from 'react'
import styles from '../../../assets/style/AuthorDetail.module.css';
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getAuthorById } from '@/app/services/api/author_request';
import { useRouter } from 'next/navigation';
type Props = {}

const AuthorDetail = (props: { params: any }) => {

  const router = useRouter();


  const [author, setAuthor] = useState<Author>();

  useEffect(() => {
    async function loadAuthor() {
      let author = await getAuthorById(props.params.authorId);


      setAuthor(author);
    }

    loadAuthor();

  }, [])

  return (
    <>
      <Navbar />
      <div className={styles.authorDetailContainer}>

        <div className="row">
          {author ? <>
            <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className={styles.authorDetailImage}>
                <img className={styles.authorDetailImageSource} src={author.authorImage} alt="" />
              </div>
            </div>
            <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className={styles.authorDetailButtons}>
                <button onClick={()=>{router.push(`/authors/${author._id}/editAuthor`)}} className={`btn btn-warning text-white ${styles.authorDetailButton}`}>Edit Author</button>
                <button onClick={()=>{router.push(`/authors/${author._id}/addBook`)}} className={`btn btn-success text-white ${styles.authorDetailButton}`}>Add book</button>
              </div>

              <div className={styles.authorDetail}>
                <h2 className={styles.authorDetailTitle}>Author Detail</h2>
                <div className={styles.authorDetailElement}> <span className={styles.authorDetailElementTitle}>Name:</span>  {author.name}</div>
                <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Year:</span> {new Date().getFullYear() - author.birthYear} years old</div>
                <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Genre:</span> {author.genre}</div>
                <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Gender:</span> {author.gender}</div>
                <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Bio:</span> {author.bio}</div>

              </div>

            </div>
          </> :
            <>

            </>}

        </div>

      </div>
    </>
  )
}

export default AuthorDetail