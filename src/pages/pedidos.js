import React from 'react';
import { Button, Card, Dropdown, Space } from 'antd';
import {useNavigate} from 'react-router-dom';
import { MenuOutlined, RightSquareOutlined } from '@ant-design/icons';

const Pedidos = () => {

  const navigate = useNavigate();

  if(localStorage.getItem("session") === "false"){
    navigate('/');
  }

  const logout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("userData");
    navigate('/');
  }

  const items = [
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

      <div className="pedidos-page">
        <h1> <b>Lista de Pedidos: </b></h1>
        <Card
          hoverable
          bordered={false}
          className="ordenar-pedidos card-info-content"
          onClick={() => {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            navigate('/Perfil')
            }
          }
        >
          <div className='ordenar-pedidos'>
            <RightSquareOutlined style={{fontSize:'25px'}}/>
            <h2 className='pedidos-elemento'>Heberto Urribarri</h2>
          </div>
        </Card>
        <Card
          hoverable
          bordered={false}
          className="ordenar-pedidos card-info-content"
          onClick={() => {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            navigate('/Perfil')
            }
          }
        >
          <div className='ordenar-pedidos'>
            <RightSquareOutlined style={{fontSize:'25px'}}/>
            <h2 className='pedidos-elemento'>Maria Silba</h2>
          </div>
        </Card>
      </div>

    </div>
    </>
  );

};
export default Pedidos;
