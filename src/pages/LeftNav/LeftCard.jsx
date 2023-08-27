import React from 'react';
import { Card } from 'react-bootstrap';
import leftLogo1 from './../../assets/1.png'
import leftLogo2 from './../../assets/2.png'
import leftLogo3 from './../../assets/3.png'

const LeftCard = () => {
    return (
        <>
            <Card className='mb-3'>
                <Card.Img variant="top" src={leftLogo1} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text>
                        This is a longer card
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src={leftLogo2} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text>
                        This is a longer card
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src={leftLogo3} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text>
                        This is a longer card
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default LeftCard;