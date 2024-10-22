import './App.css';
import React, { useEffect, useState } from 'react';  //useEffect e useState ancora non utilizzate
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Header from "./components/Header" //Importa l'header
import { BrowserRouter as Router } from "react-router-dom"; //libreria per il routing in react 
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

    <div >
      <div class="container text-center">
        <div class="row fixed-top"><Header />
        </div>

        <div class="row"> {/* paddingTop permette il render sotto all'header */}
          <div class="col-3 d-none d-sm-block" style={{ paddingTop: '70px' }}>
            <Sidebar />
          </div>

          <div class="col" style={{ paddingTop: '56px' }}>
            <Router>
              <main className="main-content p-4"> {/* main is useful for SEO*/}
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Tasks" element={<Tasks />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </main>
            </Router>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

