import React from 'react';
import styles from './Paginator.module.scss';




function Paginator() {

  return (
      <>
        <ul className={styles.paginator}>
          <li className={styles.paginator__first}>
            <a href="/">назад</a>
          </li>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li className={styles.paginator__last}>
            <a href="/">назад</a>
          </li>
        </ul>
      </>
  );
}

export default Paginator;
