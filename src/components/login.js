import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal } from 'antd';
import { 
  MailOutlined,
  UnlockOutlined
} from '@ant-design/icons';

import axios from 'axios';
import Register from "./register";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const Login = (props) => {

    const navigate = useNavigate();
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(true);

    const onFinish = async (values) => {
        
      const response = await axios.post('http://localhost:4000/api/users/login',{
        email: values.email
      });

      if(response.status === 505) { alert('Error en el servidor'); return 0; }

      if(response.data.length === [].length) {
        alert('El email ingresado no se encuentra registrado');
        return 0;
      }

      if(response.data[0]?.password === values.password){
      
        localStorage.setItem("userData", JSON.stringify({
          id: response.data[0]?.id,
          admin: response.data[0]?.admin, 
          nombre: response.data[0]?.nombre,
          telefono: response.data[0]?.telefono,
          email: values.email,
          Password: values.password
        }));
        localStorage.setItem("session", true);
        
        if(response.data[0]?.admin === true){
          localStorage.setItem("admin", true);
          navigate('/Pedidos');
        } else {
          navigate('/Perfil');
        }

      } else {
        alert('Contrasena incorrecta');
      }
    }; 

    const showRegister = () => {
        handleCancel();
        setIsRegisterVisible(!isRegisterVisible);
    };

    const handleCancel = () => {
        setLoginVisible(!loginVisible);
    };
    
    return (
    <>
      <Modal title="Iniciar Sesion" open={props.visible === loginVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name={'email'} label="Correo" 
            rules={[{ type: 'email', required: true, message: 'Por favor, ingresa tu correo!' }]}
          >
            <Input size="large" placeholder="Correo electronico" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item name={'password'} label="Contraseña" 
            rules={[{ required: true, message: 'Por favor, ingresa tu contraseña!' }]}
          >
            <Input.Password size="large" placeholder="Contraseña" prefix={<UnlockOutlined />} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit" >
              Iniciar
            </Button>
          </Form.Item>
          <a href='#none' onClick={() => showRegister()}>Registrarme</a>
        </Form>
      </Modal>
      { isRegisterVisible?
        <Register visible={isRegisterVisible} />
        : null
      }
    </>
    ); 
}

export default Login;