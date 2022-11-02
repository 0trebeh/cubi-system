import React from 'react';
import { Button, Card, Image } from 'antd';
import 'antd/dist/antd.min.css';
import "./App.css";


const App = () => {

  return (
    <div className="body">

      <nav className='menu ordenar'>
        <Image
          width={200}
          src="http://localhost:3000/logo-menu.jpeg"
        />
        <div className='ordenar'>
          <Button className='boton-nav' type="primary">Sobre Nosotros</Button>
          <Button className='boton-nav' type="primary">Servicios</Button>
          <Button className='boton-nav' type="primary">Contactos</Button>
        </div>
      </nav>

      <div className="info">
        <h1>Informacion de la Empresa</h1>
      </div>

      <div className="servicios">
        <h1>Servicios</h1>
      </div>
      
      <div className="contactos">
        <h1>Contactos</h1>
      </div>

    </div>
  );

};
export default App;
