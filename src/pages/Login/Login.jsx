import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState();

    const [password, setPassword] = useState();
    const [passError, setPassError] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success(`${loggedUser.email} Login Successfully`);
            event.target.reset();
            navigate(from, {replace: true});
        }).catch(error => {
            console.log(error);
            toast.error(error.message);
        })

    }

    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        // console.log(email);
        setEmail(email);
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
            setEmailError('Please enter an valid email address');
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (event) => {
        const inputPass = event.target.value;
        setPassError(inputPass);
        if (!/(?=.*[a-z])/.test(inputPass)) {
            setPassError('Input at least one lowercase character');
        } else if (!/(?=.*[A-Z])/.test(inputPass)) {
            setPassError('Input at least one uppercase character');
        } else if (!/(?=.*[0-9])/.test(inputPass)) {
            setPassError('Input at least one number');
        } else if (!/(?=.*[!@#$%^&*])/.test(inputPass)) {
            setPassError('Input at least one special character like !@#$%^&*');
        } else if (!/(?=.{8,})/.test(inputPass)) {
            setPassError('Input password length 8 characters');
        } else {
            setPassError('');
        }
    }

    return (
        <div className='w-50 mx-auto my-4 px-5 py-3 rounded border'>
            <h2 className='text-center my-3'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control value={email} onChange={handleEmail} name='email' type="email" placeholder="Enter Email" required />
                </Form.Group>
                <Form.Text>
                    {<p className='text-danger'>{emailError && emailError}</p>}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control value={password} onChange={handlePassword} name='password' type={show ? 'password' : 'text'} placeholder="Password" required />
                </Form.Group>
                <Form.Text>
                    {<p className='text-danger'>{passError && passError}</p>}
                </Form.Text>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setShow(!show)} type="checkbox" label="Show Password" />
                </Form.Group>
                <Button className='mb-2' variant="link">
                    Forgot Password
                </Button> <br />
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text>
                    <p className='text-success'>{success}</p>
                    <p className='text-danger'>{error}</p>
                </Form.Text>
                <Form.Text>
                    Dont Have An Account ? <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;