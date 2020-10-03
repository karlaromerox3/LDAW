import React from 'react';
import ReactDOM from 'react-dom';
import Header1 from './components/Header1';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; 
import Search from './components/Search';
import CardNR from './components/CardNR';

ReactDOM.render(
    <Header1 />,
  document.getElementById('root')
);
ReactDOM.render(
  <Search />,
document.getElementById('root1')
);
ReactDOM.render(
  <CardNR />,
document.getElementById('root2')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
