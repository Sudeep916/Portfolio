import React, { FC } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content } = Layout
interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout:FC<PageLayoutProps>= ({children}) => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: '#001529',
            minHeight: 480,
            padding: 24,
            color:'#fff'
          }}
        >
          This is my Content
        </div>
      </Content>
        <div className="children">
            {children}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default PageLayout
