import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {  Link } from 'react-router-dom';
import styles from './MainLayout.module.scss'

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: <Link to='/about' className={styles.link}>About</Link>,
    key: '/about',
  },
  {
    label: <Link to='/blog' className={styles.link}>Blog</Link>,
    key: '/blog',
  },
  
];

const MainLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [currentPath,setCurrentPath] = useState("")


  useEffect(() => {
    setCurrentPath(location.pathname + location.search)
  }, [location.pathname])

  
  return (
    <Layout
      className={styles.layout}
    >
      <Header
        className={styles.header}
      >
        <div>
          <Link to='/' style={{color:'#000'}}><h1>Salimov's Blog</h1></Link>
        </div>
        <Menu
          className={styles.menu}
          mode="horizontal"
          disabledOverflow={true}
          items={items}
          selectedKeys={currentPath}
        />
      </Header>

      <Content
        className={styles.content}
      >
        <div
          className={styles.insideContent}
        >
            {children}
        </div>
      </Content>

      <Footer
        className={styles.footer}
      >
         © {new Date().getFullYear()} shazarius.uz
      </Footer>
    </Layout>
  );
};

export default MainLayout;
