import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal } from 'antd';
import {
  UnlockOutlined,
  MailOutlined
} from '@ant-design/icons';

import Login from "./login";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const Register = (props) => {

  const navigate = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(true);

  const onFinish = () => {
    navigate('/Home');
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