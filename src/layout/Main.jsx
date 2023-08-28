import React from 'react';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/LeftNav/LeftNav';
import RightNav from '../pages/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Header/NavigationBer';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBer />
            <div className='outlet-container my-4'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LeftNav />
                        </Col>
                        <Col lg={6} >
                            <Outlet />
                        </Col>
                        <Col lg={3}>
                            <RightNav />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Main;