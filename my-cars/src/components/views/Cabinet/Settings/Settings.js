import React from 'react';
import { useFormik } from 'formik';
import styles from './Settings.module.scss';
import Submit from '../../../common/Submit';
import Input from '../../../common/Input';


const Settings = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: ''
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
                  type="password"
                  placeholder="Введіть поточний пароль"
                  id="currentPassword"
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  handler={formik.handleChange}
                 />

                <Input
                  type="password"
                  placeholder="Введіть новий пароль"
                  id="newPassword"
                  name="newPassword"
                  value={formik.values.newPassword}
                  handler={formik.handleChange}
                 />

                <Input
                  type="password"
                  placeholder="Повторіть новий пароль"
                  id="repeatNewPassword"
                  name="repeatNewPassword"
                  value={formik.values.repeatNewPassword}
                  handler={formik.handleChange}
                 />

                <Submit type="submit" text="Зберегти" />
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Settings;
