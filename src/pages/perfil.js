import React, {useState} from 'react';
import { Button, Card, Dropdown, Space } from 'antd';
import {useNavigate} from 'react-router-dom';
import { 
  UserOutlined,
  MenuOutlined, 
  CreditCardOutlined, 
  MobileOutlined, 
  DollarCircleOutlined, 
  SketchOutlined
} from '@ant-design/icons';

import Pdf from "../components/pdf";

const Perfil = () => {

  const navigate = useNavigate();

  const [IsOpenPdf, setIsOpenPdf] = useState(false);

  var user = JSON.parse(localStorage.getItem("userData"));
  var isAdmin = JSON.parse(localStorage.getItem("userData"))?.admin;

  if(localStorage.getItem("session") === "false"){
    navigate('/');
  }

  const generarReporte = () => {
    //solicitar cotizacion
    alert("Generar reporte");
    setIsOpenPdf(true);
  };

  const logout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("userData");
    navigate('/');
  }

  const items = [
    {
      label: (<>
      { isAdmin ?
          <Button className='boton-nav active' onClick={() => navigate('/Pedidos')}>Lista de Clientes</Button>
          :
          <Button className='boton-nav active' onClick={() => navigate('/')}>Inicio</Button>
      }
      </>),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (<Button className='boton-nav danger' onClick={() => logout()}>Cerrar sesión</Button>),
      key: '1',
    },
  ];

  return (
    <>
    <div className="body">
      <nav className='menu ordenar-nav'>
        <a  style={{height: '100%'}} href="#inicio">
          <img
            style={{height: '100%'}}
            src={ "https://cubi-system.herokuapp.com/logo-menu.jpeg" }
            alt="CubiSystem C.A"
          />
        </a>

          <div className='ordenar-nav hide-botton-menu'>
            { isAdmin ?
              <Button className='boton-nav active' onClick={() => navigate('/Pedidos')}>Lista de Clientes</Button>
              :
              <Button className='boton-nav active' onClick={() => navigate('/')}>Inicio</Button>
            }
            <Button className='boton-nav danger' onClick={() => logout()}>Cerrar sesión</Button>
          </div>

          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
            className="hide-icon-menu"
          >
            <a href="#Menu" onClick={(e) => e.preventDefault()}>
              <Space>
                <MenuOutlined className='icon-nav'/>
              </Space>
            </a>
          </Dropdown>

      </nav>

      <div className="section-one">
        <h1><UserOutlined/> Perfil </h1>
        <h3><b>Nombre: </b> {user?.nombre}</h3>
        <h3><b>telefono: </b> {user?.telefono}</h3>
        <h3><b>Correo: </b> {user?.email}</h3>
      </div>
      
      <div className="section pedidos" id='pedidos'>
        <h1> Pedidos </h1>
          <Card
            hoverable
            bordered={false}
            className="ordenar-pedidos card-info-content"
          >
            <h3><b>#1 Instalacion de camaras</b></h3>
            <p className='text-p'> <b>Costo: $500</b></p>
            { isAdmin ?
                <Button className='boton-nav danger' onClick={() => generarReporte()}>Generar reporte de venta</Button>
              :
                null
            }
          </Card>
          <Card
            hoverable
            bordered={false}
            className="ordenar-pedidos card-info-content"
          >
            <h3><b>#2 Instalacion de software Premium</b></h3>
            <p className='text-p'> <b>Costo: $150</b></p>
            { isAdmin ?
                <Button className='boton-nav danger' onClick={() => generarReporte()}>Generar reporte de venta</Button>
              :
                null
            }
          </Card>
      </div>

      { isAdmin ?
        null
        :
        <>
          <div className="section nota" id='Pasos'>
            <Card
              hoverable
              bordered={false}
              className="ordenar-pedidos card-info-content"
            >
              <h3><b>Pasos a seguir posterior a la solicitud de cotizacion</b></h3>
              <p className='text-p'> Dentro de las 24hr siguientes al pedido de una cotizacion,
              se le dara un estimado del costo total basandonos en la informacion dada en el formulario, y
              nuestro personal se pondra en contacto con usted para confirmar el pedido y 
              programar una visita de inspeccion.
              </p>
            </Card>
            <b>Nota: </b> El costo pudiese variar al realizar la inspeccion.
          </div>

          <div className="section" id='pago'>
            <h1> Metodos de pago </h1>
            <div className='ordenar-pago'>
              <Card
                hoverable
                bordered={false}
                className="ordenar-pedidos card-pago-content"
              >
                <h3><b><MobileOutlined /> Pago movil: </b></h3>
                <p className='text-p'><b>C.I: </b> 27.962.940 </p>
                <p className='text-p'><b>Telf: </b> 0414 6506340 </p>
                <p className='text-p'><b>Banco: </b> Bicentenario </p>
              </Card>
              <Card
                hoverable
                bordered={false}
                className="ordenar-pedidos card-pago-content"
              >
                <h3><b><CreditCardOutlined /> Transferencias: </b></h3>
                <p className='text-p'><b>Banco: </b> Bicentenario </p>
                <p className='text-p'><b>Numero de cuenta: </b> 0175-0609-9200-7582-0142 </p>
                <p className='text-p'><b>C.I: </b> 27.962.940 </p>
              </Card>
              <Card
                hoverable
                bordered={false}
                className="ordenar-pedidos card-pago-content"
              >
                <h3><b><SketchOutlined /> Paypal: </b></h3>
                <p className='text-p'><b>Email: </b> hebertourribarri2@gmail.com </p>
              </Card>
              <Card
                hoverable
                bordered={false}
                className="ordenar-pedidos card-pago-content"
              >
                <h3><b> <DollarCircleOutlined /> Divisas: </b></h3>
                <p className='text-p'><b>Info: </b> Dirigirse a 
                  <a href='https://www.google.com/maps/place/CUBISYSTEM,+CA./@10.5648069,-71.6269119,17z/data=!3m1!4b1!4m5!3m4!1s0x8e8997c0e7e1fab5:0xc5012231e4dde8ce!8m2!3d10.564807!4d-71.6247236' 
                  target='_blank' rel="noreferrer"> CubiSystem</a> 
                </p>
              </Card>
            </div>
          </div>
        </>
      }
      { IsOpenPdf ?
          <Pdf/>
        :
          null
      }
    </div>
    </>
  );

};
export default Perfil;
