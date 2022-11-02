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
        <Card
          className='card'
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <div className="servicios"></div>
      
      <div className="contactos"></div>

    </div>
  );

};
export default App;
