import React from 'react';
import logo1 from './../../assets/editorsInsight1.png'
import logo2 from './../../assets/editorsInsight2.png'
import logo3 from './../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';

const EditorsInsight = () => {
    return (
        <div className='mt-3'>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;