"use client"
import Navbar from '@/app/components/Navbar'

import React, { useEffect, useState } from 'react'
import styles from '../../../assets/style/AuthorDetail.module.css';
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getAuthorById } from '@/app/services/api/author_request';
import { useRouter } from 'next/navigation';
import { getBooks } from '@/app/services/api/book_request';
type Props = {}

const AuthorDetail = (props: { params: any }) => {

  const router = useRouter();


  const [author, setAuthor] = useState<Author>();
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    async function loadAuthor() {
      let author = await getAuthorById(props.params.authorId);

      

      await setAuthor(author);

      loadBooks(author);
    }
    async function loadBooks(authorObj:Author) {
      let booksData = await getBooks();
      const authorsBooks = booksData.filter((book:Book,index:number)=>{
        console.log(book.authorId);
        
        
        
          if(book.authorId == authorObj._id){
            return book;
          }
      })

      setBooks(authorsBooks);
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
                <button onClick={() => { router.push(`/authors/${author._id}/editAuthor`) }} className={`btn btn-warning text-white ${styles.authorDetailButton}`}>Edit Author</button>
                <button onClick={() => { router.push(`/authors/${author._id}/addBook`) }} className={`btn btn-success text-white ${styles.authorDetailButton}`}>Add book</button>
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

            {books && books.map((book: Book, index: number) => {
              return <div key={index} className="col-12 mt-5 mb-4">
                <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className={`card`} >
                    <img className={`card-img-top`} src={book.coverImg}  />
                    <div className="card-body">
                      <h5 className="card-title">{book.name}</h5>
                      <p className="card-text">Year: {book.year}</p>
                      <p className="card-text">Description:  {book.description}</p>
                      <div className='d-flex justify-content-center '>
                        <a href={book.bookFile.slice(0,book.bookFile.indexOf('/upload')+7)+`/fl_attachment:${book.name}`+book.bookFile.slice(book.bookFile.indexOf('/upload')+7)} className='btn btn-primary'>Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
            })}

          </> :
            <>

            </>}

        </div>

      </div>
    </>
  )
}

export default AuthorDetail