import React from 'react';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../Header/ibdex';
import MainPage from '../MainPage/ibdex';
import Product from '../Product/ibdex';
import Footer from '../Footer/ibdex';



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
        </Switch>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
