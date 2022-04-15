import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handelRegister = event => {
        event.preventDefault();
       const name =(event.target.className.value);
       const email = event.target.email.email.value;
       const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handelRegister} >

                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address ' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="submit" value="Register" />
                <p>Already Have an account ?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login </Link>  </p>
            </form>
        </div>
    );
};

export default Register;