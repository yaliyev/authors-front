"use client"
import Navbar from '@/app/components/Navbar'
import { getAuthorById, putAuthor } from '@/app/services/api/author_request'
import { AuthorValidationSchema } from '@/app/validation/authorValidation'
import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import styles from '../assets/style/AddAuthor.module.css';
import { uploadFile } from '../services/api/uploader_request'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { AuthorEditValidationSchema } from '../validation/authorEditValidation'

type Props = {

}



const EditAuthor = (props: Props) => {

  const router = useRouter();

  const [author, setAuthor] = useState<Author>();

  const isDeadRef = useRef<HTMLSelectElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const authorImageRef = useRef<HTMLInputElement>(null);


  const formik = useFormik({
    validationSchema: toFormikValidationSchema(AuthorEditValidationSchema),
    initialValues: {
      name: '',
      birthYear: '',
      genre: '',
      isDead: '',
      gender: '',
      authorImage: '',
      bio: ''
    },
    enableReinitialize: true,
    onSubmit: async (values, actions) => {
      let element = document.getElementById('authorImage') as HTMLInputElement;
      let file = element.files![0];

      let newAuthor;
      if(file != undefined){
        let uploadedFile = await uploadFile(file);

        newAuthor = {id:author?._id,...values,authorImage: uploadedFile.url};
  
        
      }else{
        newAuthor = {id:author?._id,...values,authorImage: author?.authorImage};
        
      }

      let response =await putAuthor(newAuthor);

      if(response.status == 200){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Author edited",
          timer: 1500
        }) .then(()=>{
         // router.push(`/authors/${author!._id}`);
        })
      }

      
     


      
      


     

    }
  });

  useEffect(() => {
    const path = window.location.pathname;

    const id = path.slice(path.indexOf('authors/') + 8, path.lastIndexOf('/editAuthor'));

    if (id != "" && id != undefined) {
      loadAuthor();
    }

    async function loadAuthor() {
      const authorData = await getAuthorById(id);

      setAuthor(authorData);
      
      formik.setValues({
        name: authorData.name,
        birthYear: authorData.birthYear.toString(),
        genre: authorData.genre,
        isDead: authorData.isDead.toString(),
        gender: authorData.gender,
        authorImage: '',
        bio: authorData.bio
      });

   

    }


  }, []);





  return (

    <div className={styles.addAuthorFormContainer}>
      <h2 className={styles.addAuthorTitle}>Edit Author</h2>
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
          <select ref={isDeadRef} name='isDead' value={formik.values.isDead} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorFormSelectElement}>
            <option value="" >is Dead</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div>
          {formik.errors.isDead && formik.touched.isDead && <div style={{ color: 'red' }}>{formik.errors.isDead}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <select ref={genderRef} name='gender' value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles.addAuthorFormSelectElement}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          {formik.errors.gender && formik.touched.gender && <div style={{ color: 'red' }}>{formik.errors.gender}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input ref={authorImageRef} id='authorImage'
            name='authorImage' value={formik.values.authorImage} onChange={formik.handleChange} onBlur={formik.handleBlur} type='file' className={` ${styles.addAuthorFormButtonElement}`} />
        </div>

        <div>
          {formik.errors.authorImage && formik.touched.authorImage && <div style={{ color: 'red' }}>{formik.errors.authorImage}</div>}
        </div>

        <div className={styles.addAuthorFormElement}>
          <input placeholder='bio'
            name='bio' className={styles.addAuthorInputElement} value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' />
        </div>

        <div className={styles.addAuthorFormElement}>
          <button type='submit' className={`btn btn-primary px-5 ${styles.addAuthorSubmitButtonElement}`}>Add</button>
        </div>


      </form>

    </div>
  )
}

export default EditAuthor