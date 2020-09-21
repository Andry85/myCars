import React from 'react';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../Header/';
import MainPage from '../MainPage/';
import Product from '../Product/';
import Footer from '../Footer/';
import Singup from '../Singup/'
import Login from '../Login/'



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
        </Switch>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
