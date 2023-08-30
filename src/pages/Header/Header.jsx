import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import logo from './../../assets/logo/logo.png'
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const {news} = useContext(AuthContext)
    return (
        <div>
            <div className='text-center text-dark my-2'>
                <img style={{height: "50px"}} src={logo} alt="" />
                <p><span className='fw-bold'>{moment().format('dddd, ')}</span>{moment().format('MMMM D, YYYY')}</p>
            </div>
            {/* <NavigationBer /> */}
            <div className='d-flex align-items-center my-3 container'>
                <Button variant="danger">সর্বশেষ</Button>
                <Marquee pauseOnHover speed={40} className='bg-light py-2 text-danger'>
                    <div className='d-flex g-4'>
                        {
                            news?.map(n => <p className='m-0 me-2' key={n._id}><Link className='text-decoration-none text-danger' to={`/news/${n._id}`}>{n.title}</Link> |</p> )
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;