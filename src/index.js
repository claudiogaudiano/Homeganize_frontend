
//PRIMO CODICE, DA CONTROLLARE

/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; //per bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; //per le icone di bootstrap
import {render} from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'; //per funzionalità interattive di Bootstrap

import {BrowserRouter as Router} from "react-router-dom"; //libreria per il routing in react



render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
