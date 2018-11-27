import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as actions from './actions/Todo';


import { Provider } from 'react-redux';
import createStore from './createStore';

import $ from 'jquery';

const store = createStore();

$.get('http://minamiya.info:8888/get')
  .done(
    (todoList) => {
      console.log(todoList);
      store.dispatch(actions.dataFetchCompleted(todoList));
    })
  .fail( (d) => { alert('データ取得エラー！'); console.log(d); });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
