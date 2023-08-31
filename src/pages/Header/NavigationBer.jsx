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

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
            })
    }
    
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
                    <Link to='/category/0'><img style={{height: '40px', width: '100px'}} src={navLogo} alt='Logo' /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            {
                               categories?.map(category => <Link className='text-decoration-none me-2 btn btn-outline-secondary btn-sm' to={category.id}>{category?.name}</Link>) 
                            }
                            
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link href="#deets"><img title={user?.displayName} src={user.photoURL} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%' }} /></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <Button onClick={handleLogOut} variant="secondary">লগআউট</Button> : <Link to='/login'><Button variant="secondary">লগইন</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBer;