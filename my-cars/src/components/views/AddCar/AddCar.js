import React, {useState} from 'react';
import { useFormik } from 'formik';
import styles from './AddCar.module.scss';
import Submit from '../../common/Submit';
import Input from '../../common/Input';
import File from './../../common/File';
import Select from '../../common/Select';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const AddCar = () => {

  const [cars, setCars] = useState({
    allCars: [
          {
            type: 'Легкові',
            marka: [
              {
                title: 'BMW',
                models: ['100', '200', '3000', '400']
              },
              {
                title: 'Mersedes',
                models: ['A-100', 'C-200', 'B-300']
              },
              {
                title: 'Audi',
                models: ['Z-100', 'V-200', 'N-300']
              }
            ]
          },
          {
            type: 'Вантажівки',
            marka: [
              {
                title: 'ТATA',
                models: ['10', '20', '300', '40']
              },
              {
                title: 'BMN',
                models: ['A-10', 'C-20', 'B-00']
              },
              {
                title: 'KRAZ',
                models: ['1', '2', '3']
              }
            ]
          },
          {
            type: 'Автобуси',
            marka: [
              {
                title: 'IKARUS',
                models: ['1010', '2020', '3020', '4040']
              },
              {
                title: 'CODRO',
                models: ['A-1', 'C-2', 'B-3']
              },
              {
                title: 'LIMIT',
                models: ['01', '02', '03']
              }
            ]
          }
        ],
        title: [],
        models: [],
        selectedType : 'Виберіть тип',
        selectedTitle : 'Виберіть марку',
        cities: ['Київ', 'Одеса', 'Львів', 'Дніпро'],
        transmission: ['Механіка','Автомат'],
        colors: ['Червоний', 'Зелений', 'Синій'],
        years: [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958]
      }
  );

  const formik = useFormik({
    initialValues: {
      file: null,
      probig: '',
      engine: '',
      price: null,
    },
    onSubmit: values => {
      alert(JSON.stringify(
        { 
          fileName: values.file.name, 
          type: values.file.type,
          size: `${values.file.size} bytes`,
          probig: values.probig,
          engine: values.engine,
          price: values.price,
        }
        , null, 2));
    }
  });

  function changeType(event) {

    event.persist();

    setCars(prevState => {
      return {...prevState, 
        selectedType: event.target.value,
        title: cars.allCars.find(item => item.type === event.target.value).marka
      };
    });

  }
  function changeMarka(event) {

    event.persist();

    let marksArr = cars.allCars.find(item => item.type === cars.selectedType).marka;

    setCars(prevState => {
      return {...prevState, 
        selectedTitle: event.target.value,
        models: marksArr.find(item => item.title === event.target.value).models  
      };
    });

  }

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
                          <File
                            id="file" 
                            name="file" 
                            handler={(event) => {formik.setFieldValue("file", event.currentTarget.files[0])}}
                            formik={formik}
                          />
                      </div>
                      <div className={styles.formWrap__bottom}>
                        <div className="row pb-4">
                          <div className="col-6">
                            <Select
                              items={cars.allCars}
                              title="Тип транспорту"
                              value={cars.selectedType}
                              placeholder="Тип транспорту"
                              handler={changeType}
                              filter="type"
                            />
                          </div>
                          <div className="col-6">
                            <Select
                              items={cars.title}
                              title="Виберіть марку"
                              value={cars.selectedTitle}
                              placeholder="Type"
                              handler={changeMarka}
                              filter="title"
                            />
                          </div>
                        </div>

                        <div className="row pb-4">
                          <div className="col-6">
                            <Select
                              items={cars.models}
                              title="Виберіть модель"
                              placeholder="Model"
                            />
                          </div>
                          <div className="col-6">
                            <Select
                              items={cars.cities}
                              title="Виберіть місто"
                              placeholder="Місто"
                            /> 
                          </div>
                        </div>

                        <div className="row pb-4">
                          <div className="col-6">
                            <Input
                              type="text"
                              placeholder="пробіг тис. км."
                              id="probig"
                              name="probig"
                              value={formik.values.probig}
                              handler={formik.handleChange}
                            />
                          </div>
                          <div className="col-6">
                            <Input
                              type="text"
                              placeholder="Двигун куб. см."
                              id="engine"
                              name="engine"
                              value={formik.values.engine}
                              handler={formik.handleChange}
                            />
                          </div>
                        </div>

                        <div className="row pb-4">
                          <div className="col-6">
                            <Select
                              items={cars.transmission}
                              title="Виберіть коробку передач"
                              placeholder="Коробка передач"
                            /> 
                          </div>
                          <div className="col-6">
                              <Select
                              items={cars.colors}
                              title="Виберіть колір авто"
                              placeholder="колір"
                            />
                          </div>
                        </div>

                        <div className="row pb-4">
                          <div className="col-6">
                            <Input
                              type="text"
                              placeholder="ціна"
                              id="price"
                              name="price"
                              value={formik.values.price}
                              handler={formik.handleChange}
                            />
                          </div>
                          <div className="col-6">
                            <Select
                              items={cars.years}
                              title="Рік випуску"
                              placeholder="Рік випуску"
                            />
                          </div>
                        </div>

                        <div className="row pb-4">
                          <div className="col-12">
                            
                          </div>
                        </div>
                      
                        <Submit type="submit" text="Розмістити оголошення" />
                      </div>
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
