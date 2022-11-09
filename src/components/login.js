import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal } from 'antd';
import { 
  MailOutlined,
  UnlockOutlined
} from '@ant-design/icons';

import Register from "./register";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const Login = (props) => {

    const navigate = useNavigate();
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(true);

    const onFinish = (values) => {
        navigate('/Home');
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
        <Register visible={isRegisterVisible} />
    </>
    ); 
}

export default Login;