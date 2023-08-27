import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='my-2' variant="outline-primary w-100"><FaGoogle /> Login With Google</Button>
                <Button className='w-100' variant="outline-secondary"><FaGithub /> Login With Google</Button>
            </div>
            <div className='my-3'>
                <h3>Find Us On</h3>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item as="li">
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><FaYoutube /> Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div
                className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp')`}} >
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