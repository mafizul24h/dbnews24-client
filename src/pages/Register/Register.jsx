import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import googleIcon from './../../assets/icons/google-icon.png'
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, googleSignIn, setUser, setReload } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState();

    const [photo, setPhoto] = useState();
    const [pError, setPError] = useState();

    const [password, setPassword] = useState();
    const [passError, setPassError] = useState();

    const [confirm, setConfirm] = useState();
    const [errorConf, setErrorConf] = useState();
    const [successConf, setSuccessConf] = useState();

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

        if (password !== confirm) {
            toast.error('Password not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success(`${loggedUser.email} User Registration Successfully`);
                profileUpdate(loggedUser, name, photo);
                setUser(loggedUser);
                navigate('/category/0');
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const profileUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
            setReload(true);
          }).catch((error) => {
            toast.error(error.message);
          });
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

    const handlePhoto = (event) => {
        const inputPhoto = event.target.value;
        // console.log(inputPhoto);
        setPhoto(inputPhoto);
        if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(inputPhoto)) {
            setPError('Please input valid url');
        } else {
            setPError('');
        }
    }


    const handlePassword = (event) => {
        const inputPass = event.target.value;
        setPassword(inputPass);
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

    const handleConfirm = (event) => {
        const inputConfirm = event.target.value;
        // console.log(inputConfirm);
        setConfirm(inputConfirm);
        setSuccessConf('')
        if (!/(?=.*[a-z])/.test(inputConfirm)) {
            setErrorConf('Input at least one lowercase character');
        } else if (!/(?=.*[A-Z])/.test(inputConfirm)) {
            setErrorConf('Input at least one uppercase character');
        } else if (!/(?=.*[0-9])/.test(inputConfirm)) {
            setErrorConf('Input at least one number');
        } else if (!/(?=.*[!@#$%^&*])/.test(inputConfirm)) {
            setErrorConf('Input at least one special character like !@#$%^&*');
        } else if (!/(?=.{8,})/.test(inputConfirm)) {
            setErrorConf('Input password length 8 characters');
        }
        else if (password != inputConfirm) {
            setErrorConf('Password and Confirm Password Not Match');
        }
        else if (password === inputConfirm) {
            setErrorConf('');
            setSuccessConf('Password Matched');
        }
    }

    const handleTrams = (event) => {
        const checkAccept = event.target.checked;
        // console.log(checkAccept);
        setAccept(checkAccept)
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logedUser = result.user;
                // console.log(logedUser);
                toast.success(`Login Successffuly`);
                setUser(logedUser);
                navigate('/category/0');
            }).catch(error => {
                // console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className='w-50 mx-auto my-4 px-5 py-3 rounded border'>
            <h2 className='text-center my-3'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control value={photo} onChange={handlePhoto} name='photo' type="url" placeholder="Enter Photo URL" required />
                </Form.Group>
                <Form.Text>
                    {<p className='text-danger'>{pError && pError}</p>}
                </Form.Text>
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
                <Form.Group className="mb-3" controlId="formBasicConfirm">
                    <Form.Label>Your Confirm Password</Form.Label>
                    <Form.Control value={confirm} onChange={handleConfirm} name='confirm' type={show ? 'password' : 'text'} placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Text>
                    {<p className='text-success'>{successConf && successConf}</p>}
                    {<p className='text-danger'>{errorConf && errorConf}</p>}
                </Form.Text>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setShow(!show)} type="checkbox" label="Show Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check onClick={handleTrams} type="checkbox" label={<>Accept <><Link to='/trams'>Trams and Condition</Link></></>} />
                </Form.Group>
                <Button className='w-100 mt-3' variant="primary" type="submit" disabled={!accept} >
                    নিবন্ধন করুন
                </Button>
                <Form.Text>
                    <p className='text-success'>{success}</p>
                    <p className='text-danger'>{error}</p>
                </Form.Text>
            </Form>
            <Button onClick={handleGoogleSignIn} className='my-2' variant="outline-dark w-100"><img style={{ height: '25px' }} src={googleIcon} alt="" /> গুগল দিয়ে নিবন্ধন করুন</Button>
            <Form.Text>
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে? <Link to='/login'>লগইন করুন</Link>
            </Form.Text>
        </div>
    );
};

export default Register;