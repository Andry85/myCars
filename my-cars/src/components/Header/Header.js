import React from 'react';
import styles from './Header.module.scss';


function Header() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <header className={styles.header}>
              <a className={styles.logo} href="/">MyCars</a>
              <ul className={styles.officeList}>
                <li><a href="/">Кабінет</a></li>
              </ul>
            </header>  
          </div>
        </div>
      </div>
  );
}

export default Header;
