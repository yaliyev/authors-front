import React from 'react'

import styles from '../assets/style/AddAuthor.module.css';

type Props = {}

const AddAuthor = (props: Props) => {
  return (
    <div className={styles.addAuthorFormContainer}>
      <h2 className={styles.addAuthorTitle}>Add Author</h2>
      <form className={styles.addAuthorForm}>
        <div className={styles.addAuthorFormElement}>
           <input className={styles.addAuthorInputElement} placeholder="Name" type="text" />
        </div>

        <div className={styles.addAuthorFormElement}>
           <input className={styles.addAuthorInputElement} placeholder="Birth Year:" type="text" />
        </div>

        <div className={styles.addAuthorFormElement}>
           <input className={styles.addAuthorInputElement} placeholder="Genre:" type="text" />
        </div>

        <div className={styles.addAuthorFormElement}>
        <select className={styles.addAuthorFormSelectElement}>
            <option defaultValue="" >is Dead</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div className={styles.addAuthorFormElement}>
        <select className={styles.addAuthorFormSelectElement}>
            <option defaultValue="" >Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className={styles.addAuthorFormElement}>
        <button className={`btn btn-secondary ${styles.addAuthorFormButtonElement}`}>Click to upload image</button>
        </div>

        <div className={styles.addAuthorFormElement}>
        <button className={`btn btn-primary px-5 ${styles.addAuthorSubmitButtonElement}`}>Add</button>
        </div>

      </form>

    </div>
  )
}

export default AddAuthor