import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Header/NavigationBer';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <Container>
            {/* <NavigationBer /> */}
            <div style={{minHeight: '80vh'}}>
            <Outlet />
            </div>
            <p className='text-center'><small>All Reserve In The Dragon News @ 2023</small></p>
        </Container>
    );
};

export default LoginLayout;