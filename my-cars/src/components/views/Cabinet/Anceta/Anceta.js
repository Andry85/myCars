import React from 'react';
import { useFormik } from 'formik';
import styles from './Anceta.module.scss';
import Submit from '../../../common/Submit';
import Input from '../../../common/Input';


const Anceta = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      email: ''
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
                  placeholder="Ім’я"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  handler={formik.handleChange}
                 />

                <Input
                  type="tel"
                  placeholder="Телефон"
                  id="tel"
                  name="tel"
                  value={formik.values.tel}
                  handler={formik.handleChange}
                 /> 

                <Input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  handler={formik.handleChange}
                 />

                <Submit type="submit" text="Редагувати" />
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Anceta;
