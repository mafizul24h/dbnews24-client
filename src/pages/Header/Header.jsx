import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import logo from './../../assets/logo/logo.png'
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { news, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
            })
    }

    return (
        <div>
            <div className='container text-center text-dark my-2 d-flex justify-content-between align-items-end'>
                <p className='m-0'><span className='fw-bold'>{moment().format('dddd, ')}</span>{moment().format('MMMM D, YYYY')}</p>
                <img style={{ height: "50px" }} src={logo} alt="" />
                <div className='d-none d-md-block'>
                    {user && <img title={user?.displayName} src={user.photoURL} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />}
                    {
                        user ? <Button onClick={handleLogOut} variant="secondary">লগআউট</Button> : <Link to='/login'><Button variant="secondary">লগইন</Button></Link>
                    }
                </div>
            </div>
            {/* <NavigationBer /> */}
            <div className='d-flex align-items-center my-3 container'>
                <Button variant="danger">সর্বশেষ</Button>
                <Marquee pauseOnHover speed={40} className='bg-light py-2 text-danger'>
                    <div className='d-flex g-4'>
                        {
                            news?.slice(0, 10).map(n => <p className='m-0 me-2' key={n._id}><Link className='text-decoration-none text-danger' to={`/news/${n._id}`}>{n.title}</Link> *</p>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;