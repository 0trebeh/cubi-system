import React, {useEffect} from 'react';
import { Button, Card, Dropdown, Space } from 'antd';
import {useNavigate} from 'react-router-dom';
import { MenuOutlined, RightSquareOutlined } from '@ant-design/icons';

import axios from 'axios';

const Pedidos = () => {

  const navigate = useNavigate();

  if(localStorage.getItem("session") === "false"){
    navigate('/');
  }

  var arrays = [];
  var result = [];

  useEffect(() => { 
    //obtiene los datos del usuario
    const getData = async () => {
      const response = await axios.get('https://cubi-api-rest.herokuapp.com/api/request');
      arrays = response?.data;

      var flag = false;
      for( var i = 0; i < arrays.length; i++ ) {
        flag = true;
        if(i === 0) result.push(arrays[i]);
        for( var j = 0; j < result.length; j++ ) {
          if(arrays[i].id === result[j]?.id){
          flag = false;
            break;
          }
        }
        if(flag === true) result.push(arrays[i]);
      }
    }
    getData();
  }, []);

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
        { result.map((item, i) =>
          <Card
            key={i}
            hoverable
            bordered={false}
            className="ordenar-pedidos card-info-content"
            onClick={() => {
              navigate('/Perfil')
              }
            }
          >
            <div className='ordenar-pedidos'>
              <RightSquareOutlined style={{fontSize:'25px'}}/>
              <h2 className='pedidos-elemento'>{item.nombre}</h2>
            </div>
          </Card>
        )}        
      </div>

    </div>
    </>
  );

};
export default Pedidos;
