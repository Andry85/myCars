import React from 'react';
import { useFormik } from 'formik';
import styles from './Singup.module.scss';
import Submit from './../../common/Submit';
import Input from '../../common/Input';

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
                <Input
                  type="text"
                  placeholder="Ваше ім’я"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  handler={formik.handleChange}
                 />
                <Input
                  type="email"
                  placeholder="Ваш email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  handler={formik.handleChange}
                 />
                <Input
                  type="tell"
                  placeholder="Ваш телефон"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  handler={formik.handleChange}
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
