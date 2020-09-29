import React from 'react';
import styles from './Input.module.scss';


function Input(props) {

  function handler() {
    props.handler();
  }


  return (
      <>
        <input 
          className={styles.input}
          type={props.type} 
          value={props.value} 
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          value={props.value}
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
