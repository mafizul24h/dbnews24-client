import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Header/NavigationBer';
import { Container } from 'react-bootstrap';
import Footer from '../pages/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            {/* <NavigationBer /> */}
            <div style={{minHeight: '90vh'}}>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default LoginLayout;