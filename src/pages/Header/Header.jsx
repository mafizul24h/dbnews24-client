import React, { useContext } from 'react';
import moment from 'moment';
import logo from './../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBer from './NavigationBer';

const Header = () => {

    return (
        <Container>
            <div className='text-center text-dark my-2'>
                <img src={logo} alt="" />
                <p className='mt-2'><small>Journalism Without Fear or Favour</small></p>
                <p><span className='fw-bold'>{moment().format('dddd, ')}</span>{moment().format('MMMM D, YYYY hh:mm:ss a')}</p>
            </div>
            <div className='d-flex align-items-center my-3'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover speed={40} className='bg-light py-2 text-danger'>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <NavigationBer />
        </Container>
    );
};

export default Header;