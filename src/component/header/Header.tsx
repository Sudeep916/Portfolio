import React from 'react';  
import { Layout, Menu } from 'antd';  
import { LinkedinOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'; 
import { Link } from 'react-router-dom';  

const { Header } = Layout;  

const PortfolioHeader = () => {  
  return (  
    <Layout style={{ backgroundColor: '#001529' }}>  
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>  
        <div style={{ color: 'white', fontSize: '24px' ,marginLeft:'-30px'}}>My portfolio</div>  
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, justifyContent: 'center' }}>  
        <Menu.Item key="1">  
          <Link to="/">Home</Link>  
        </Menu.Item>  
        <Menu.Item key="2">  
          <Link to="/ProjectPage">Projects</Link>  
        </Menu.Item>  
        <Menu.Item key="3">  
          <Link to="/TechnologiesPage">Technologies</Link>  
        </Menu.Item>  
        <Menu.Item key="4">  
          <Link to="/AboutPage">About Me</Link>  
        </Menu.Item>  
        <Menu.Item key="5">  
          <Link to="/ContactPage">Contact</Link>  
        </Menu.Item>
        </Menu>  
        
        <div style={{ color: 'white' }}>  
        <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <LinkedinOutlined />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#fff', fontSize: '20px', margin: '0 10px' }}
          >
            <InstagramOutlined />
          </a>
        </div>  
      </Header>  
    </Layout>  
  );  
};  

export default PortfolioHeader;