import React, {useState} from 'react';
import { useFormik } from 'formik';
import styles from './Cabinet.module.scss';
import Submit from '../../common/Submit';
import Input from '../../common/Input';
import Tabs from '../../common/Tabs';
import AddCar from '../Cabinet/AddCar';
import Settings from '../Cabinet/Settings';
import Anceta from '../Cabinet/Anceta';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Cabinet = () => {

  const [data, setData] = useState({
    sellername: 'Сергій',
    phone: '066-666-666',
    email: 'shapovala@ukr.net',
    activeTab: 0,
    tabs: {
      list: ['Мої оголошення', 'Налаштування', 'Редагувати'],
      components: [<AddCar/>,<Settings/>,<Anceta />]
    }
  });


  return (
    <>
    <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12">
            <div className={styles.cabinetTop}>
              <div className={styles.cabinetTop__row}>
                <h3 className={styles.cabinetTop__sellername}>{data.sellername}</h3>
              </div>
              <div className={styles.cabinetTop__row}>
                <ul className={styles.cabinetTop__contactList}>
                  <li>Тел: {data.phone}</li>
                  <li>Email: {data.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5">
          <div className="col-12">
              <Tabs items={data} handle={setData} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Cabinet;
