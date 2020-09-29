import React from 'react';
import styles from './Select.module.scss';


function Select(props) {



  const listOptionsWidthFilter = props.items.map((item,index) => (
    <option key={index}>
      {item[props.filter]}
    </option>
  ));

  const listOptionsWidthOutFilter = props.items.map((item,index) => (
    <option key={index}>
      {item}
    </option>
  ));

  function handler(e) {
    if (props.handler) {
      props.handler(e);
    } else {
      e.preventDefault();
    }
  }

  return (
      <>
        <select 
        className={styles.select}
        value={props.value} 
        placeholder={props.placeholder}
        onChange={handler} 
        >
            <option>{props.title}</option>
            {props.filter
              ? listOptionsWidthFilter
              : listOptionsWidthOutFilter
            }
        </select>
      </>
  );
}

export default Select;
