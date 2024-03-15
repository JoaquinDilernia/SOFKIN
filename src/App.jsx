import React, { useEffect, useRef } from 'react';
import Home from './Components/Home/Home';
import Wpp from './Components/Wpp/Wpp';
import './App.css'; // Import your css file


function App() {


  return (

    <div className="App">
      {/*
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#companies">Empresas</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
 */}
      <section id="home" >
        
        <Home />
      </section>

      <section id="services" >
        <h1>Servicios</h1>

      </section>
<Wpp />
    </div>
  );
}

export default App;