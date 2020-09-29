import React from 'react';
import { useFormik } from 'formik';
import styles from './AddCar.module.scss';
import Submit from '../../common/Submit';
import Input from '../../common/Input';
import Thumb from './../../common/Thumb';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const AddCar = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      phone: '',
      email: '',
      file: null
    },
    onSubmit: values => {
      alert(JSON.stringify(
        { 
          firstName: values.firstName,
          phone: values.phone,
          email: values.email,
          fileName: values.file.name, 
          type: values.file.type,
          size: `${values.file.size} bytes`
        }
        , null, 2));
    }
  });

  return (
    <div className="container">
        <div className="row p-5">
          <div className="col-12">
            <div className={styles.formWrap}>
              <Router>
                <Switch>
                  <Route exact path="/cabinet">
                    <Link to='/cabinet/addCarMore'><Submit type="button" text="Додати авто" /></Link>
                  </Route>
                  <Route exact path="/cabinet/addCarMore">
                    <div className={styles.formWrap__back}>
                      <Link to='/cabinet'>Назад</Link>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className={styles.formWrap__top}>
                        <div className={styles.formWrap__addPhotoTitle}>Додати фото:</div>
                        <div className="form-group">
                          <input id="file" name="file" type="file" onChange={(event) => {
                            formik.setFieldValue("file", event.currentTarget.files[0]);
                          }} className="form-control" />
                          <Thumb file={formik.values.file} />
                        </div>
                        
                      </div>
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
                      <Submit type="submit" text="Розмістити оголошення" />
                    </form>
                  </Route>
                </Switch> 
              </Router>  

              
            </div>
          </div>
      </div>
    </div>
  );
};

export default AddCar;
