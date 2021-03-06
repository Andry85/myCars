import React from 'react';
import styles from './Submit.module.scss';


function Submit(props) {

  return (
      <>
        <button type={props.type} className={styles.submit}>{props.text}</button>
      </>
  );
}

export default Submit;

Submit.defaultProps = {
  text: 'Submit'
};
