import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaYoutube } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import { Link } from 'react-router-dom';
import googleIcon from './../../assets/icons/google-icon.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const RightNav = () => {
    const { googleSignIn, setUser } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logedUser = result.user;
                // console.log(logedUser);
                toast.success(`Login Successffuly`);
                setUser(logedUser);
            }).catch(error => {
                // console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div>
            <div>
                <h4 className='fs-5 text-decoration-underline'>লগইন করুন</h4>
                <Button onClick={handleGoogleSignIn} className='my-2' variant="outline-dark w-100"><img style={{ height: '25px' }} src={googleIcon} alt="" /> গুগল দিয়ে লগইন করুন</Button>
            </div>
            <div className='my-3'>
                <h3 className='fs-5 text-decoration-underline'>আমাদের খুজে পাবেন</h3>
                <Link to='https://www.facebook.com/info.dbnews24?mibextid=ZbWKwL' className='my-2 btn btn-outline-primary w-100' ><FaFacebook /> ফেসবুক</Link>
                <Link to='https://youtube.com/@dbnews24newsportal?si=CqPU4PPwuzY31sJ0' className='mb-2 btn btn-outline-danger w-100' ><FaYoutube /> ইউটিউব</Link>
            </div>
            <QZone />
            <div
                className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp')` }} >
                <h1 className="mb-3 h2">Jumbotron</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
                    labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
                    neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
                </p>
                <Button className='py-4 px-3 fw-bold fs-4' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;