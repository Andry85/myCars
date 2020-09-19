import React from 'react';
import styles from './MainPage.module.scss';

import Search from '../Search/ibdex';
import Cart from '../Cart/ibdex';
import Paginator from '../Paginator/ibdex';

import car_1 from '../Cart/img/001.jpg';

const carsCatalog = [
  {
    image: car_1,
    title: 'Honda Civic 2008',
    url: '/product',
    price: 28500,
    race: 34000,
    fuelType: 'Бензин',
    engine: 2,
    location: 'Київ'
  },
  {
    image: car_1,
    title: 'Honda Civic 2018',
    url: '/product',
    price: 24500,
    race: 14000,
    fuelType: 'Бензин',
    engine: 1,
    location: 'Львів'
  },
  {
    image: car_1,
    title: 'Honda Civic 2002',
    url: '/product',
    price: 14500,
    race: 18000,
    fuelType: 'Газ',
    engine: 1.2,
    location: 'Полтава'
  },
  {
    image: car_1,
    title: 'Honda Civic 2002',
    url: '/product',
    price: 14500,
    race: 16000,
    fuelType: 'Газ',
    engine: 1.2,
    location: 'Полтава'
  }
];





function MainPage() {

  const carsItems = carsCatalog.map((item,index) => (
    <div className="col-6 mb-5"  key={index}>
      <Cart items={item} />
    </div>
  ));

  return (
    <>
      <Search />
      <div className="container">
        <div className="row p-5">
            {carsItems}
        </div>
        <div className="row p-5">
            <div className="col">
              <Paginator/>
            </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
