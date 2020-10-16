import React from 'react';
import styles from './Footer.module.scss';




function Footer() {

  return (
      <> 
        <div className="container">
          <div className="row">
              <div className="col">
              <footer className={styles.footer}>
                <a className={styles.footer__logo} href="/">My cars</a> 
              </footer>
              </div>
          </div>
        </div>
      </>
  );
}

export default Footer;
