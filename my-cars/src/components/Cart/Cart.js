import React from 'react';
import styles from './Cart.module.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Cart(props) {
  return (
    <>
      <div className={styles.cart}>
        <figure>
          <Link to={props.items.url}>
            <img className={styles.cart__pic} src={props.items.image} alt={props.items.title} />
          </Link> 
        </figure>
        <div className={styles.cart__inner}>
          <div className={styles.cart__col_1}>
              <h2 className={styles.cart__title}>
                  <Link to={props.items.url}>{props.items.title}</Link>
              </h2>
              <div className={styles.cart__race}>{props.items.race} тис. км</div>
          </div>
          <div className={styles.cart__col_2}>
            <div className={styles.cart__price}>{props.items.price}  $</div>
            <span className={styles.cart__fuelType}>{props.items.fuelType}</span>
            <span className={styles.cart__engine}>{props.items.engine}</span>
            <div className={styles.cart__location}>{props.items.location}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
