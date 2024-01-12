import Navbar from '@/app/components/Navbar'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../../assets/style/AuthorDetail.module.css';
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
type Props = {}

const AuthorDetail = (props: { params: any }) => {


  return (
    <>
      <Navbar />
      <div className={styles.authorDetailContainer}>

        <div className="row">
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className={styles.authorDetailImage}>
              <img className={styles.authorDetailImageSource} src="https://media.cnn.com/api/v1/images/stellar/prod/230220101022-01-jk-rowling.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="" />
            </div>
          </div>
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className={styles.authorDetail}>
              <h2 className={styles.authorDetailTitle}>Author Detail</h2>
              <div className={styles.authorDetailElement}> <span className={styles.authorDetailElementTitle}>Name:</span>  J.K Rowling</div>
              <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Year:</span> 59 years old</div>
              <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Genre:</span> Fantasy</div>
              <div className={styles.authorDetailElement}><span className={styles.authorDetailElementTitle}>Gender:</span> Female</div>
              <button className={`btn btn-warning text-white px-4 ${styles.authorDetailButton}`}>Edit</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default AuthorDetail