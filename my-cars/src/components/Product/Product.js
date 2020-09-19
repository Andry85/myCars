import React from 'react';
import styles from './Product.module.scss';

import car_1 from '../Cart/img/001.jpg';

const carInfo = {
  name: 'Honda Civic 2008',
  race: 34000,
  price: 28500,
  image: car_1,
  engine:  2,
  transmission: 'Автомат',
  color: 'сірий',
  desc: `Автомобіль в чудовому стані. Вкладень не потребує, 
  оригінальний пробіг. Повністю обслужений. Просторий салон, 
  повноцінних 7 місць.Дуже динамічний, мягкий та комфортний. 
  В салоні запах нового авто. Детальніше відповім за телефону.`,
  sellerName: 'Сергій',
  mainPhone: '+38-068-355-45-55',
  additionalPhone: '+38-098-455-55-56'

}



function Product(props) {



  return (
    <>
      <div className="container">
        <div className="row p-5">
            <div className="col-4">
              <h2 className={styles.name}>{carInfo.name}</h2>
            </div>
            <div className="col-8">
              <div className={styles.title}>
                <div className={styles.race}>{carInfo.race} тыс. км</div>
                <div className={styles.price}>{carInfo.price}  $</div>
              </div>
            </div>
        </div>
        <div className="row p-5">
            <div className="col-4">
              <aside className={styles.seller}>
                <div className={styles.seller__title}>Продавець:</div>
                <h3>{carInfo.sellerName}</h3>
                <p>{carInfo.mainPhone}</p>
                <p>{carInfo.additionalPhone}</p>
              </aside>
            </div>
            <div className="col-8">
                  <figure className={styles.photoCar}>
                    <img src={carInfo.image} alt=""/>
                  </figure>
                  <ul className={styles.propertiesList}>
                    <li>
                      <div className={styles.propertiesList__name}>Пробіг:</div>
                      <div className={styles.propertiesList__field}>{carInfo.race} тис. км</div>
                    </li>
                    <li>
                      <div className={styles.propertiesList__name}>Двигун:</div>
                      <div className={styles.propertiesList__field}>{carInfo.engine} л. бензин</div>
                    </li>
                    <li>
                      <div className={styles.propertiesList__name}>Коробка передач:</div>
                      <div className={styles.propertiesList__field}>{carInfo.transmission}</div>
                    </li>
                    <li>
                      <div className={styles.propertiesList__name}>Колір:</div>
                      <div className={styles.propertiesList__field}>{carInfo.color}</div>
                    </li>
                    <li>
                      <div className={styles.propertiesList__name}>Опис:</div>
                      <div className={styles.propertiesList__field}>{carInfo.desc}</div>
                    </li>
                  </ul>
            </div>
        </div>
      </div>
    </>
  );
}

export default Product;
