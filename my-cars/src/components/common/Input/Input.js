import React from 'react';
import styles from './Input.module.scss';


function Input(props) {


  return (
      <>
        <input 
          className={styles.input}
          type={props.type} 
          value={props.value} 
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          onChange={props.handler}
        />
      </>
  );
}

export default Input;

Input.defaultProps = {
  id: 'text',
  name: 'text',
  placeholder: 'Enter Text',
};
