import React, { useContext, useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import navLogo from './../../assets/logo/logo.png'
import { useState } from 'react';

const NavigationBer = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);
    const { user, logOut } = useContext(AuthContext);
    console.log(user);



    useEffect(() => {
        fetch('https://dbnew24-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/category/0'><img style={{ height: '40px', width: '100px' }} src={navLogo} alt='Logo' /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            {
                                categories?.map(category => <Link className='text-decoration-none me-2 btn btn-outline-secondary btn-sm' to={category.id}>{category?.name}</Link>)
                            }

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link eventKey={2} href="#memes">
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBer;