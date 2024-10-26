import './App.css';
import React, { useEffect, useState } from 'react';  //useEffect e useState ancora non utilizzate
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header" //Importa l'header
import { BrowserRouter as Router } from "react-router-dom"; //libreria per il routing in react 
import { Login } from "./pagine/Login";
import { SignUp } from "./pagine/SignUp";
import { Tasks } from "./pagine/Tasks";
import { Page404 } from "./pagine/Page404";


function App() {

  //PRIMO CODICE. DA CONTROLLARE IN SEGUITO

    /*const [message, setMessage] = useState('');
  
    useEffect(() => {
      // Esempio di richiesta GET al backend
      axios.get('http://localhost:5000/api/hello')
        .then(response => {
          setMessage(response.data.message);
          console.log(`Messaggio dal frontend`);
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
  
  
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

    const userId = 123;

  return (

    <div >
      <div className="container-fluid">
        <header className="row fixed-top">
          <Header />
        </header>

        <div className="row"> {/* paddingTop permette il render sotto all'header */}
          {/*per non far scendere la sidebar creo una riga vuota flessibile sotto di essa*/}
          <nav className="sidebar col-2 d-none d-sm-block text-center" style={{ paddingTop: '70px', height: '100vh'}}>
            <Sidebar />
          </nav>

          <div className="col" style={{ paddingTop: '56px'}}>
            <Router>
              <main className="main-content text-center" handleUser={userId}> {/* main is useful for SEO*/}
                <Routes>
                  <Route path="/" element={<Tasks />} />
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

