import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handelRegister = event => {
        event.preventDefault();
       const name =(event.target.className.value);
       const email = event.target.email.email.value;
       const password = event.target.password.value;

       createUserWithEmailAndPassword(email,password);
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