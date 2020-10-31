import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.module.scss';
import App from './components/App/';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import AllReducers from './components/common/education/Redux/reducers/Index';

import ThemeContext from './ThemeContext';

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContext.Provider value="red">
        <App />
      </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
