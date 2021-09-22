import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './assets/style/style.css';

const root = document.querySelector("#root");

ReactDOM.render( <CounterApp value={ 10 } />, root);