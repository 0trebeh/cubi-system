import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { Form, Input, Button, Modal, Select, InputNumber } from 'antd';
import { 
    CodepenOutlined,
    VideoCameraOutlined,
    CameraOutlined,
    HomeOutlined,
    GlobalOutlined
} from '@ant-design/icons';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const FormCam = (props) => {

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
          <Form.Item name={'dimension'} label="Dimension" 
            rules={[{ required: true, message: 'Por favor, ingresa la dimension del lugar' }]}
          >
            <Input size="large" placeholder="Dimension" prefix={<CodepenOutlined />} />
            metros cuadrados {'(m²)'}
          </Form.Item>
          <Form.Item name={'lugar'} label="Tipo de Lugar" 
            rules={[{ required: true, message: 'Por favor, elija un valor!' }]}
          >
            <Select
                allowClear
                options={[
                    {
                        value: 'Residencia',
                        label: 'Residencia',
                    },
                    {
                        value: 'Negocio',
                        label: 'Negocio',
                    },
                ]}
            />
          </Form.Item>
          <Form.Item name={'Ubicacion'} label="Ubicacion" 
            rules={[{ required: true, message: 'Por favor, ingresa tu Ubicacion!' }]}
          >
            <Input size="large" placeholder="Ubicacion" prefix={<GlobalOutlined />} />
          </Form.Item>
          <h3><b> Cantidad de camaras:</b></h3>
          <Form.Item name={'exteriores'} label="Exteriores" 
            rules={[{ required: true, message: 'Por favor, ingresa la cantidad de camaras en exteriores!' }]}
          >
            <InputNumber size="large" placeholder="Exteriores" prefix={<VideoCameraOutlined />} style={{ width: '100%' }}/>
          </Form.Item>
          <Form.Item name={'interiores'} label="Interiores" 
            rules={[{ required: true, message: 'Por favor, ingresa la cantidad de camaras en interiores!' }]}
          >
            <InputNumber size="large" placeholder="Interiores" prefix={<CameraOutlined />} style={{ width: '100%' }}/>
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

export default FormCam;