import React from 'react';
import { Button, Image } from 'antd';
import 'antd/dist/antd.min.css';
import "./App.css";

const App = () => {

  return (
    <div className="body">

      <nav className='menu ordenar'>
        <Image
          height={'100%'}
          src={"https://cubi-system.herokuapp.com/logo-menu.jpeg" || "http://localhost:3000/logo-menu.jpeg"}
        />
        <div className='ordenar'>
          <Button className='boton-nav'>Sobre Nosotros</Button>
          <Button className='boton-nav'>Servicios</Button>
          <Button className='boton-nav'>Contactos</Button>
        </div>
      </nav>

      <div className="info">
        <h1 className="text">Informacion de la Empresa</h1>
      </div>

      <div className="servicios">
        <h1 className="text2">Servicios</h1>
      </div>
      
      <div className="contactos">
        <h1 className="text3">Contactos</h1>
      </div>

    </div>
  );

};
export default App;
