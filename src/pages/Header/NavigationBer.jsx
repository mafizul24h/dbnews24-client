import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">The Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
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
        </Container>
    );
};

export default NavigationBer;