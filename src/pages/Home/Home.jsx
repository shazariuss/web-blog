import React from 'react';
import { Button, Flex } from 'antd';
import MainLayout from '../../layout/MainLayout';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate = useNavigate()

  
  return (
    <MainLayout>
        <Flex gap='20px' style={{marginBottom:'30px'}}>
        <div className="img" style={{width:'100px', height:'100px', borderRadius:'50%', backgroundColor:'black'}}></div>
          <Flex vertical gap='5px'>
            <h1>Salimov Shoxrux</h1>
            <h2 style={{color:'#515151', fontWeight:'500'}}>Software Engineer</h2>
          </Flex>
        </Flex>
        <p style={{fontSize:'18px', fontWeight:'400', marginBottom:'20px'}}>I write about non-technical stuff in the technical world.</p>
        <Flex gap='10px'>
          <Button type='primary' size='large' onClick={() => navigate('/blog')}>Read Blog</Button>
          <Button size='large' onClick={() => navigate('/about')}>About Me</Button>
        </Flex>
    </MainLayout>
  );
};

export default Home;
