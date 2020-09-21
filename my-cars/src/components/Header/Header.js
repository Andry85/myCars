import React from 'react';
import styles from './Header.module.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <header className={styles.header}>
              <a className={styles.logo} href="/">MyCars</a>
              <ul className={styles.officeList}>
                <li><Link to='/singup'>Кабінет</Link></li>
              </ul>
            </header>  
          </div>
        </div>
      </div>
  );
}

export default Header;
