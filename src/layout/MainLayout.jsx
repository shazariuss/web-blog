import React, { Children } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {  NavLink } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: <NavLink to='/about'>About</NavLink>,
    key: 'about',
  },
  {
    label: <NavLink to='/blog'>Blog</NavLink>,
    key: 'blog',
  },
  
];

const MainLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout
      style={{
        maxWidth:'1020px',
        minHeight: '100vh', 
        margin:'0 auto',
        display: 'flex',
        flexDirection: 'column', 
        backgroundColor:'#fff'
      }}
    >
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'#fff',
          marginBottom:'20px',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <div>
          <NavLink to='/' style={{color:'#000'}}><h1>Salimov's Blog</h1></NavLink>
        </div>
        <Menu
          style={{
          backgroundColor:'#fff',
          }}
          mode="horizontal"
          disabledOverflow={true}
          items={items}
        />
      </Header>

      <Content
        style={{
          padding: '0 48px',
          background: '#fff',
          flex: 1, 
        }}
      >
        <div
          style={{
            boxShadow:'2px 2px 50px rgba(0,0,0,0.05)',
            background: '#fff',
            minHeight: '100%',
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            {children}
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          maxHeight:'200px',
          overflow:'hidden',
          backgroundColor:'#fff'
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
