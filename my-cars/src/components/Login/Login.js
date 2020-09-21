import React from 'react';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import Submit from '../Submit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Login = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
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
                  placeholder="Ваш email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <input
                  className={styles.input}
                  placeholder="Пароль"
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <Submit type="submit" text="Увійти" />
              </form>
              <div className={styles.formWrap__login}>
                <Link to='/singup'>Зареєстроватися</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
