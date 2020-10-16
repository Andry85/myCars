import React from 'react';
import styles from './Textarea.module.scss';


function Textarea(props) {

  return (
      <>
        <label 
          htmlFor={props.id}
          className={styles.textareaLabel}
          >
          {props.placeholder}
          </label>
        <textarea 
          id={props.id}
          className={styles.textarea}
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

export default Textarea;

Textarea.defaultProps = {
  id: 'text',
  name: 'text',
  placeholder: 'Enter Text',
};
