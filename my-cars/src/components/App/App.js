import React from 'react';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../../components/common/Header';
import MainPage from '../views/MainPage/';
import Product from '../views/Product/';
import Footer from '../../components/common/Footer';
import Singup from '../views/Singup/';
import Login from '../views/Login';
import Cabinet from '../views/Cabinet';
import Test from '../views/Test';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/singup">
            <Singup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
