import React from 'react';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewLayout = () => {
    return (
        <div>
            <Header />
            <div className='outlet-container my-4'>
                <Container>
                    <Row>
                        <Col lg={9}>
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

export default NewLayout;