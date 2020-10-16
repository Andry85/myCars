import React, {useContext} from 'react';
import styles from './Header.module.scss';

import ThemeContext from '../../../ThemeContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  const color = React.useContext(ThemeContext);
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <header className={styles.header}>
              <a style={{color}} className={styles.logo} href="/">MyCars</a>
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
