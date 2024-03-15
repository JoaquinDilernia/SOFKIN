import React, { useEffect, useRef } from 'react';
import iphone from '../../assets/iphone.png';
import './Home.css'


const Home = () => {
  return (
    <div className='home-contenedor'>
        <h1>SOFKIN</h1>
    <div className='contenedor-img'>
    <img src={iphone} alt="iphone" />
    </div>
    <div className='contenedor-texto'>
      <h2>ScanPrice</h2>
      <p>¿Candaso/a de cambiar de actualizar los precios en tu local? </p>
        <p>Con ScanPrice podrás actualizar los precios de tus productos de manera rápida y sencilla.</p>
        <p>¡No pierdas más tiempo y dinero!</p>
  </div>
  </div>
  )
}

export default Home