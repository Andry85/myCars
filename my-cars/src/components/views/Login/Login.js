import React from 'react';
import { useFormik } from 'formik';
import styles from './Login.module.scss';
import Submit from '../../common/Submit';
import Input from '../../common/Input';

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
                <Input
                  type="email"
                  placeholder="Ваш email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  handler={formik.handleChange}
                 />
                <Input
                  type="password"
                  placeholder="Пароль"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  handler={formik.handleChange}
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
