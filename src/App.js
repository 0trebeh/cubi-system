import React from 'react';
import { Button, Image, Card, Dropdown, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import "./App.css";

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
    key: '3',
  },
];

const App = () => {

  return (
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
            <Button className='boton-nav'><a href="#info">Sobre Nosotros</a></Button>
            <Button className='boton-nav'><a href="#serv">Servicios</a></Button>
            <Button className='boton-nav'><a href="#contact">Contactos</a></Button>
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
        <h1 className="text0"> La seguridad al alcance de tus manos! </h1>
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
                  src={ "https://cubi-system.herokuapp.com/logo.png" }
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
        <h3 className="text2">Servicios de <b>instalación de cámaras de seguridad</b> a nivel domiciliar y empresarial, así como también a la <b>instalación del software Saint administrativo de ventas</b></h3>
        <div className='content-center-660'>
          <div className='servicios-content'>
            <Card
              hoverable
              className='card-serv '
              cover={<img className='img-card-serv' alt="Instalacion de camaras de Seguridad" 
              src="https://cubi-system.herokuapp.com/ins-camaras.webp" />}
            >
              <h4 className='text-p'><b>Instalación de cámaras de seguridad</b></h4>
              <p className='text-p'>Acceso desde cualquier lugar a través de su computador o dispositivo móvil</p>
            </Card>
            <div className='div-separator'></div>
            <Card
              hoverable
              className='card-serv'
              cover={<img className='img-card-serv' alt="Instalacion de software" 
              src="https://cubi-system.herokuapp.com/ins-soft.webp" />}
            >
              <h4 className='text-p'><b>Instalación de software administrativo de ventas</b></h4>
              <p className='text-p'>Vendemos las licencias de 
                <a href='https://premium-soft.com/'> premium-soft </a>
                y te lo instalamos de manera segura
              </p>
            </Card>
          </div>
        </div>
      </div>

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
  );

};
export default App;
