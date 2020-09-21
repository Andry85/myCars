import React from 'react';
import { useFormik } from 'formik';
import styles from './Singup.module.scss';
import Submit from './../Submit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Singup = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      phone: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
        <div className="row p-5">
          <div className="col-12">
            <div className={styles.formWrap}>
              <form onSubmit={formik.handleSubmit}>
                <input
                  className={styles.input}
                  placeholder="Ваше ім’я"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <input
                  className={styles.input}
                  placeholder="Ваш email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <input
                  className={styles.input}
                  placeholder="Ваш телефон"
                  id="phone"
                  name="phone"
                  type="tell"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <Submit type="submit" text="Зареєструватись" />
              </form>
              <div className={styles.formWrap__login}>
                <Link to='/login'>Вже зареєстровані?</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Singup;
