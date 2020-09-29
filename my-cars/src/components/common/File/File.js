import React from 'react';
import styles from './File.module.scss';
import Thumb from './Thumb';


function File(props) {

  function handler() {
    props.handler();
  }


  return (
      <>
        <div className={styles.file}>
          <input 
           className={styles.file__input}
          id={props.id} 
          name={props.name} 
          type="file"
          onChange={props.handler} />
          <label 
            className={styles.file__label}
            htmlFor="file">
            Choose File
          </label>
          <Thumb file={props.formik.values.file} />
          
        </div>
      </>
  );
}

export default File;
