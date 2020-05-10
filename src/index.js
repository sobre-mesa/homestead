import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import LifePlanner from './lifePlanner';

ReactDOM.render(
  // <Provider store={store}>
    <LifePlanner />
  // </Provider>
  ,
  document.getElementById('root')
);

