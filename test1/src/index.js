import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import HelloWorld from './HelloWorld';
import ReactCreateElement from './ReactCreateElement';
import FunctionalElement from './FunctionalElement';
import ReactComponent from './ReactComponent';
import ReactPureComponent from './ReactPureComponent';
import MainPage from './Main/Page';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <ReactCreateElement />
    <FunctionalElement />
    <ReactComponent />
    <ReactPureComponent />
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
