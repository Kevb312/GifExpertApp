import React from 'react'
import ReactDOM from 'react-dom/client'
//import { App } from './HelloWorldApp';
//import { FirstApp } from './FirstApp'
import  './styles.css'; 

import { CounterApp } from './CounterApp'

//Renderizado
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={123} />
  </React.StrictMode>
);