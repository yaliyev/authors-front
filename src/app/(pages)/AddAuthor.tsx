"use client"
import React from 'react'

import styles from '../assets/style/AddAuthor.module.css';

import { AuthorValidationSchema } from '../validation/authorValidation';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import { uploadFile } from '../services/api/uploader_request';
import { log } from 'console';
import { postAuthor } from '../services/api/author_request';

import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

type Props = {}




const AddAuthor = (props: Props) => {

  const router = useRouter();

  const formik = useFormik({
   validationSchema: toFormikValidationSchema(AuthorValidationSchema),
    initialValues: {
      name: '',
      birthYear: '',
      genre: '',
      isDead: '',
      gender: '',
      authorImage: ''
    },
    onSubmit: async(values, actions) => {
    let element = document.getElementById('authorImage') as HTMLInputElement;
    let file = element.files![0];
    

   

   let uploadedFile = await uploadFile(file);

   let author = {...values,authorImage: uploadedFile.url};


    await postAuthor(author);
    
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Author added",
      timer: 1500
    }).then(()=>{
     router.push("/authors");
    })

    }
  });

  return (
    <div className={styles.addAuthorFormContainer}>
      <h2 className={styles.addAuthorTitle}>Add Author</h2>
      <form onSubmit={formik.handleSubmit} className={styles.addAuthorForm} encType="multipart/form-data">
        <div className={styles.addAuthorFormElement}>
          <input name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Name" type="text" />
        </div>

        <div>
          {formik.errors.name && formik.touched.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
        </div>


        <div className={styles.addAuthorFormElement}>
          <input name='birthYear' value={formik.values.birthYear} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Birth Year:" type="text" />
        </div>

        <div>
          {formik.errors.birthYear && formik.touched.birthYear && <div style={{ color: 'red' }}>{formik.errors.birthYear}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input name='genre' value={formik.values.genre} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorInputElement} placeholder="Genre:" type="text" />
        </div>

        <div>
          {formik.errors.genre && formik.touched.genre && <div style={{ color: 'red' }}>{formik.errors.genre}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <select name='isDead' defaultValue={formik.values.isDead} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorFormSelectElement}>
            <option defaultValue="" >is Dead</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div>
          {formik.errors.isDead && formik.touched.isDead && <div style={{ color: 'red' }}>{formik.errors.isDead}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <select name='gender' value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorFormSelectElement}>
            <option defaultValue="" >Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          {formik.errors.gender && formik.touched.gender && <div style={{ color: 'red' }}>{formik.errors.gender}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input id='authorImage'
           name='authorImage' value={formik.values.authorImage} onChange={formik.handleChange} onBlur={formik.handleBlur} type='file' className={` ${styles.addAuthorFormButtonElement}`} />
        </div>

        <div>
          {formik.errors.authorImage && formik.touched.authorImage && <div style={{ color: 'red' }}>{formik.errors.authorImage}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <button  type='submit' className={`btn btn-primary px-5 ${styles.addAuthorSubmitButtonElement}`}>Add</button>
        </div>

       
      </form>

    </div>
  )
}

export default AddAuthor