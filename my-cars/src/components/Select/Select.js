import React from 'react';
import styles from './Select.module.scss';


function Select(props) {


  const listOptions = props.items.map((item,index) => (
    <option key={index} value={index}>
      {item.type}
    </option>
  ));

  return (
      <>
        <select className={styles.select}>
            {listOptions}
        </select>
      </>
  );
}

export default Select;
