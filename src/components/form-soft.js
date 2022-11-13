import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal, InputNumber } from 'antd';
import { 
    LaptopOutlined,
    GlobalOutlined
} from '@ant-design/icons';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const FormSoft = (props) => {

    const navigate = useNavigate();
    const [form, setForm] = useState(true);

    const onFinish = (values) => {
        alert('cotizar');
    }; 

    const handleCancel = () => {
        setForm(!form);
    };
    
    return (
    <>
      <Modal title="Formulario de Cotizacion" open={props.visible === form}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name={'computadoras'} label="Cantidad" 
            rules={[{ required: true, message: 'Por favor, ingresa la cantidad de computadoras a las que le desea instalar el software!' }]}
          >
            <InputNumber size="large" placeholder="Numero de computadoras" prefix={<LaptopOutlined />} style={{ width: '100%' }}/>
          </Form.Item>
          <Form.Item name={'Ubicacion'} label="Ubicacion" 
            rules={[{ required: true, message: 'Por favor, ingresa tu Ubicacion!' }]}
          >
            <Input size="large" placeholder="Ubicacion" prefix={<GlobalOutlined />} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit" >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
    ); 
}

export default FormSoft;