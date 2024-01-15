"use client"
import React from 'react'

import styles from '../assets/style/AddAuthor.module.css';


import { toFormikValidationSchema } from 'zod-formik-adapter';

import { useFormik } from 'formik';

import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { BookValidationSchema } from '../validation/bookValidation';
import { uploadBookFile, uploadFile } from '../services/api/uploader_request';
import { postBook } from '../services/api/book_request';

type Props = {}




const AddBook = (props: Props) => {

  const router = useRouter();

  const formik = useFormik({
    validationSchema: toFormikValidationSchema(BookValidationSchema),
    initialValues: {
      name: '',
      year: '',
      genre: '',
      coverImg: '',
      description: '',
      bookFile: ''
    },
    onSubmit: async (values, actions) => {
 
      let coverImg = document.getElementById('coverImg') as HTMLInputElement;
      let bookFile = document.getElementById('bookFile') as HTMLInputElement;
      let coverImgFile = coverImg.files![0];

      let bookFileSource = bookFile.files![0];

  
      




       let uploadedFile = await uploadFile(coverImgFile);

       let uploadedBookFile = await uploadBookFile(bookFileSource);

       const path = window.location.pathname;

       const id = path.slice(path.indexOf('authors/') + 8, path.lastIndexOf('/addBook'));
   
       if (id != "" && id != undefined) {
        let book = {...values,coverImg: uploadedFile.url,bookFile: uploadedBookFile.url,authorId:id};

        let response =await postBook(book);

        if(response.status == 201){
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Book added",
            timer: 1500
          }) .then(()=>{
            router.push(`/authors/${id}`);
          })
        }
         
       }

      
       

        


    }
  });

  return (
    <div className={styles.addAuthorFormContainer}>
      <h2 className={styles.addAuthorTitle}>Add Book</h2>
      <form onSubmit={formik.handleSubmit} className={styles.addAuthorForm} encType="multipart/form-data">
        <div className={styles.addAuthorFormElement}>
          <input name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Name" type="text" />
        </div>

        <div>
          {formik.errors.name && formik.touched.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
        </div>


        <div className={styles.addAuthorFormElement}>
          <input name='year' value={formik.values.year} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Year:" type="text" />
        </div>

        <div>
          {formik.errors.year && formik.touched.year && <div style={{ color: 'red' }}>{formik.errors.year}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input name='genre' value={formik.values.genre} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Genre:" type="text" />
        </div>

        <div>
          {formik.errors.genre && formik.touched.genre && <div style={{ color: 'red' }}>{formik.errors.genre}</div>}
        </div>

        
        <div className={styles.addAuthorFormElement}>
        <div style={{marginBottom:'5px'}}>Cover Image</div>
          <input id='coverImg'
            name='coverImg' value={formik.values.coverImg} onChange={formik.handleChange} onBlur={formik.handleBlur} type='file' className={` ${styles.addAuthorFormButtonElement}`} />
        </div>

        <div>
          {formik.errors.coverImg && formik.touched.coverImg && <div style={{ color: 'red' }}>{formik.errors.coverImg}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input placeholder='description'
            name='description' className={styles.addAuthorInputElement} value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' />
        </div>

        <div>
          {formik.errors.description && formik.touched.description && <div style={{ color: 'red' }}>{formik.errors.description}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
        <div style={{marginBottom:'5px'}}>Book File</div>
          <input id='bookFile'
            name='bookFile' value={formik.values.bookFile} onChange={formik.handleChange} onBlur={formik.handleBlur} type='file' className={` ${styles.addAuthorFormButtonElement}`} />
        </div>

        <div>
          {formik.errors.bookFile && formik.touched.bookFile && <div style={{ color: 'red' }}>{formik.errors.bookFile}</div>}
        </div>














        <div className={styles.addAuthorFormElement}>
          <button type='submit' className={`btn btn-primary px-5 ${styles.addAuthorSubmitButtonElement}`}>Add</button>
        </div>


      </form>

    </div>
  )
}

export default AddBook