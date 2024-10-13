import React from 'react';  
import { Form, Input, Button } from 'antd';  

const LoginContainer = () => {  
  const onFinish = (values:any) => {  
    console.log('Received values:', values);  
  };  

  return (  
    <div style={{ background: '#001529', height: '84vh', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>  
      <Form  
        name="login"  
        onFinish={onFinish}  
        style={{ width: 400, background: 'transparent', padding: 20, borderRadius: 8 }}  
      >  
        <h2 style={{ textAlign: 'center' , color:'white' }}>Login</h2>  
        <Form.Item  
          name="username"  
          rules={[{ required: true, message: 'Please input your username!' }]}  
        >  
          <Input placeholder="Username" />  
        </Form.Item>  
        <Form.Item  
          name="password"  
          rules={[{ required: true, message: 'Please input your password!' }]}  
        >  
          <Input.Password placeholder="Password" />  
        </Form.Item>  
        <Form.Item>  
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>  
            Login
          </Button>  
        </Form.Item>  
      </Form>  
    </div>  
  );  
};  

export default LoginContainer;