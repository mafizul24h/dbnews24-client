import React, { useContext } from 'react';
import moment from 'moment';
import logo from './../../assets/logo/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBer from './NavigationBer';

const Header = () => {

    return (
        <div>
            <div className='text-center text-dark my-2'>
                <img style={{height: "50px"}} src={logo} alt="" />
                <p><span className='fw-bold'>{moment().format('dddd, ')}</span>{moment().format('MMMM D, YYYY')}</p>
            </div>
            <NavigationBer />
            <div className='d-flex align-items-center my-3 container'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover speed={40} className='bg-light py-2 text-danger'>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;