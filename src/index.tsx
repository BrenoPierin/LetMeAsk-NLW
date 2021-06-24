import {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';

import { NewRoom } from './Pages/NewRoom';
import { Home } from './Pages/Home';

import './Services/firebse'

import "./styles/global.scss";


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);