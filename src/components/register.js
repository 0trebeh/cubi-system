import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal } from 'antd';
import {
  UnlockOutlined,
  MailOutlined,
  UserOutlined,
  PhoneOutlined
} from '@ant-design/icons';

import axios from 'axios';
import Login from "./login";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const Register = (props) => {

  const navigate = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(true);

  const onFinish = async (values) => {
    
    const response = await axios.post('http://localhost:4000/api/users/newUser',{
      nombre: values.name, 
      telefono: values.cell, 
      email: values.email, 
      password: values.password
    });

    if(response.data.length === [].length || response.status === 505){
      alert('error al registrase');
      return 0;
    }
    
    if(response.status === 200){
      localStorage.setItem("session", true);
      localStorage.setItem("userData", JSON.stringify({
        id: response.data[0]?.id,
        admin: false,
        nombre: values.name,
        telefono: values.cell,
        email: values.email,
        Password: values.password
      }));
      navigate('/Perfil');
    }
  }; 

  const showLogin = () => {
    handleCancel();
    setIsLoginVisible(true);
  };

  const handleCancel = () => {
    setRegisterVisible(!registerVisible);
  };

  return (
    <>
    <Modal title="Registrarse" open={props.visible === registerVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item name={'name'} label="Nombre" 
          rules={[{ type: 'string', required: true, message: 'Por favor, ingresa tu nombre!' }]}
        >
          <Input size="large" placeholder="Nombre" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name={'cell'} label="Telefono" 
          rules={[{ type: 'string', required: true, message: 'Por favor, ingresa tu numero telefonico!' }]}
        >
          <Input size="large" placeholder="Telefono" prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item name={'email'} label="Correo" 
          rules={[{ type: 'email', required: true, message: 'Por favor, ingresa tu correo!' }]}
        >
          <Input size="large" placeholder="Correo electronico" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item name={'password'} label="Contraseña" 
          rules={[{ 
            required: true, 
            message: 'Por favor, ingresa tu contraseña! (minimo seis caracteres)',
            min: 6 
          }]}
        >
          <Input.Password size="large" placeholder="Contraseña" prefix={<UnlockOutlined />} />
        </Form.Item>
        <Form.Item name={'ConfirmPassword'} label="Confirmar c" 
          rules={[{ required: true, message: 'Por favor, confirme su contraseña!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('¡Las dos contraseñas que ingresó no coinciden!'));
            },
          }),
        ]}
        >
          <Input.Password size="large" placeholder="Confirmar contraseña" prefix={<UnlockOutlined />} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 16 }}>
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
        </Form.Item>
        <a href='#none' onClick={() => showLogin()}>Iniciar Sesion</a>
      </Form>
    </Modal>
    { isLoginVisible ?
      <Login visible={isLoginVisible} />
      : null
    }
    </>
  );
}

export default Register;