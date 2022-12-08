import React, { useState } from 'react';
import { Button, Image, Card, Dropdown, Space } from 'antd';
import {useNavigate} from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import Carousel from 'react-grid-carousel'

import Login from "../components/login";
import FormCam from "../components/form-cam";
import FormSoft from "../components/form-soft";

const LandingPage = () => {

  const navigate = useNavigate();

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [FormCamOpen, setFormCamOpen] = useState(false);
  const [FormSoftOpen, setFormSoftOpen] = useState(false);

  var session = localStorage.getItem("session");
  var isAdmin = localStorage.getItem("admin");

  const showLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const cotizar = (param) => {
    if(session){
      if(param === 'cam'){
        setFormCamOpen(!FormCamOpen);
      }
      if(param === 'soft'){
        setFormSoftOpen(!FormSoftOpen);
      }
    } else {
      showLogin();
    }
  };

  const items = [
    {
      label: (<Button className='boton-nav'><a href="#info">Sobre Nosotros</a></Button>),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (<Button className='boton-nav'><a href="#serv">Servicios</a></Button>),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (<Button className='boton-nav'><a href="#contact">Contactos</a></Button>),
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: (
      <>
      { session ? 
        <>
        { !isAdmin ?
          <Button className='boton-nav active' 
          onClick={() => navigate('/Perfil')}>Perfil</Button>
          :
          <Button className='boton-nav active' 
          onClick={() => navigate('/Pedidos')}>Lista de Clientes</Button>
        }
        </>
      :
        <Button className='boton-nav active' onClick={() => showLogin()}>Iniciar sesión</Button>
      }
      </>
      ),
      key: '3',
    },
  ];

  return (
    <>
    <div className="body">
      <nav className='menu ordenar-nav'>
        <a  style={{height: '100%'}} href="#inicio">
          <img
            style={{height: '100%'}}
            src={ window.location.origin + "/logo-menu.jpeg" }
            alt="CubiSystem C.A"
          />
        </a>

          <div className='ordenar-nav hide-botton-menu'>
            <Button className='boton-nav'><a href="#info">Sobre Nosotros</a></Button>
            <Button className='boton-nav'><a href="#serv">Servicios</a></Button>
            <Button className='boton-nav'><a href="#contact">Contactos</a></Button>
            
            { session ? 
              <>
              { !isAdmin ?
                <Button className='boton-nav active' 
                onClick={() => navigate('/Perfil')}>Perfil</Button>
                :
                <Button className='boton-nav active' 
                onClick={() => navigate('/Pedidos')}>Lista de Clientes</Button>
              }
              </>
            :
              <Button className='boton-nav active' onClick={() => showLogin()}>Iniciar sesión</Button>
            }
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

      <div className="inicio" id='inicio'>
        <h1 className="text0"> Sistemas de seguridad al alcance de tus manos! </h1>
      </div>

      <div className="info" id='info'>
      <h3 className="text1">Conócenos</h3>
        <h1 className="text1"><b>Sobre nosotros</b></h1>
        <div className='info-content'>
          <div className="site-card-border-less-wrapper card-info">
            <Card
              title={
                <div className='img-historia'>
                <Image
                  height={'120px'}
                  width={'110px'}
                  src={ window.location.origin + "/logo.png" }
                  alt="Logo"
                />
                </div>
              }
              hoverable
              bordered={false}
              className="ordenar card-info-content"
            >
              <p className='text-p'><b>Historia: </b>
              Cubisystem C.A, es una empresa familiar que surge de la iniciativa de los hermanos Cubillán, Henry y Héctor Cubillán quienes desde hace 14 años ofrecen los servicios de instalación de cámaras de seguridad a nivel domiciliar y empresarial, así como también a la instalación del software Saint administrativo de ventas, el cual permite la facturación de productos de acuerdo al caso, este servicio es prestado a empresas, supermercados entre otros.
              </p>
            </Card>
          </div>

          <div style={{marginTop: '20px'}}>
            <div className='card-info'></div>
            <div className="site-card-border-less-wrapper card-info">
              <Card
                hoverable
                bordered={false}
                className="ordenar card-info-content"
              >
                <p className='text-p'><b>Misión: </b> 
                   En el área de la seguridad vigilancia remota brindar seguridad y confianza a nuestros clientes usando sistemas de seguridad de última tecnología y un equipo humano comprometido con la calidad y el servicio, en el área de Software consolidarnos como una empresa confiable y responsable en el soporte técnico y servicio del sistema Administrativo y de facturación Premium Soft.
                </p>
              </Card>
            </div>
          </div>

          
          <div className="site-card-border-less-wrapper card-info">
            <Card
              hoverable
              bordered={false}
              className="ordenar card-info-content"
            >
              <p className='text-p'><b>Visión: </b> 
                 Ser la empresa líder en seguridad y vigilancia remota y la distribución y soporte técnicos de los sistemas Administrativo Premium Soft, diferenciándonos por la calidad de nuestros servicios.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="servicios" id='serv'>
        <h1 className="text2"><b>Servicios</b></h1>
        <h3 className="text2">Servicios de <b>instalación de cámaras de seguridad</b> a nivel domiciliar y empresarial, así como también a la <b>instalación del software Pskloud administrativo de ventas</b></h3>
        <div className='content-center-660'>
          <div className='servicios-content'>
            <Card
              hoverable
              className='card-serv '
              cover={<img className='img-card-serv' alt="Instalacion de camaras de Seguridad" 
              src= {window.location.origin + "/ins-camaras.webp"} />}
            >
              <h4 className='text-p'><b>Instalación de cámaras de seguridad</b></h4>
              <p className='text-p'>Acceso desde cualquier lugar a través de su computador o dispositivo móvil</p>
              { isAdmin ? null :
              <div className='boton-serv'>
                <Button className='boton-nav active' onClick={() => cotizar('cam')}>Cotizar</Button>
              </div>
              }
            </Card>
            <div className='div-separator'></div>
            <Card
              hoverable
              className='card-serv'
              cover={<img className='img-card-serv' alt="Instalacion de software" 
              src={window.location.origin + "/ins-soft.webp"} />}
            >
              <h4 className='text-p'><b>Instalación de software administrativo de ventas Pskloud</b></h4>
              <p className='text-p'>Vendemos las licencias de 
                <a href='https://premium-soft.com/'> premium-soft </a>
                y te lo instalamos de manera segura
              </p>
              { isAdmin ? null :
              <div className='boton-serv'>
                <Button className='boton-nav active' onClick={() => cotizar('soft')}>Cotizar</Button>
              </div>
              }
            </Card>
          </div>
        </div>
      </div>

      <div className='contact-title'>
        <h1><b>Promocion de productos:</b></h1>
      </div>
      <Carousel cols={1} rows={1} autoplay={4000} loop>
      <Carousel.Item>
        <div className='carousel-item'>
        <img className='carousel-margin' alt='camara de interiores' src={window.location.origin + "/int.jpeg"}/>
        <div>
          <h1>Camara tipo domo:</h1>
          <p>Camara para interiores.</p>
          <br/>
          <h3><b>Promocion de descuento:</b> Compra mas de 15 camaras tipo domo y recibiras un descuento del 10% </h3>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item'>
        <img className='carousel-margin' alt='camara de exteriores' src={window.location.origin + "/ext.jpeg"}/>
        <div>
          <h1>Camara tipo bala:</h1>
          <p>Camara para exteriores.</p>
          <br/>
          <h3><b>Promocion de descuento:</b> Compra mas de 8 camaras tipo bala y recibiras un descuento del 5% </h3>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item'>
        <img className='carousel-margin' alt='digital video records' src={window.location.origin + "/dvr.jpeg"}/>
        <div>
          <h1>Digital video record:</h1>
          <p>Se conecta a las camaras mediante un cableado para la grabación de vídeo en formato digital.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item'>
        <img className='carousel-margin' alt='digital video records' src={window.location.origin + "/sistema-administrativo-psk.jpg"}/>
        <div>
          <h1>Sistema administrativo Pskloud:</h1>
          <p>Sistema de Administración y Contabilidad para empresas en general.</p>
          <br/>
          <h3><b>Promocion de descuento:</b> Recibe un descuento del 30% con la compra de una licencia de Pskloud antes del 31 de Diciembre del 2022. </h3>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>

      <div className="contactos" id='contact'>
        <div className='contact-title'>
          <h1><b>Estamos para Servirte</b></h1>
        </div>
        <div className='content-center-660'>
          <div className="contact-body">
            <Card
              title={<h2 className='card-contact-title'>Contáctanos!</h2>}
              bordered={false}
              className="card-contact"
            >
              <p><b>Telf.:</b> <a href="tel:+58146460495">{"(0414) 646.04.95"}</a></p>
              <p><b>E-mail:</b> <a href="mailto:cubisystem@gmail.com">cubisystem@gmail.com</a></p><br/>
              <p><b>Nos ubicamos en:</b> Av. 05, Casa No. 05, Sector 8, Urbanización San Francisco, Zona Postal 4004.</p>
            </Card>
            <div className='div-separator'></div>
            <div className='mapouter card-contact'>
              <div className='gmap_canvas card-contact'>
                <iframe title='map' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=CUBISYSTEM,%20CA.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
          
          </div>
        </div>
      </div>

    </div>
      <Login visible={isLoginVisible}/>
      <FormCam visible={FormCamOpen}/>
      <FormSoft visible={FormSoftOpen}/>
    </>
  );

};
export default LandingPage;
