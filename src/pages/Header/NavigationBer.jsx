import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import navLogo from './../../assets/logo/logo.png'

const NavigationBer = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
            })
    }

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/'><img style={{height: '40px'}} src={navLogo} alt='Logo' /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to='/category/0'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '40px' }} /></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> : <Link to='/login'><Button variant="secondary">Login</Button></Link>
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