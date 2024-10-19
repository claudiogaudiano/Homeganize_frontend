import './App.css';
import React, { useEffect, useState } from 'react';  //useEffect e useState ancora non utilizzate
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pagine/Home";
import { Settings } from "./pagine/Settings";
import { Login } from "./pagine/Login";
import { SignUp } from "./pagine/SignUp";
import { Tasks } from "./pagine/Tasks";
import { Page404 } from "./pagine/Page404";


function App() {

  //PRIMO CODICE. DA CONTROLLARE IN SEGUITO

  /*  const [message, setMessage] = useState('');
  
    useEffect(() => {
      // Esempio di richiesta GET al backend
      axios.get('http://localhost:5000/api/hello')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    }, []);
  
    
    return (
      <div className="App">
        <h1>{message}</h1>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

