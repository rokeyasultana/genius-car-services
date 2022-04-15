import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Page Not Found</h1>
            <h1 className='text-danger text-center'>404</h1>
            <h3 className='text-center text-primary' >Mechanic is sleepy</h3>
            <img className='w-100' src="https://images.unsplash.com/photo-1523859597145-32eff6e463ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2xlZXB5JTIwbWFjYW5pY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    );
};

export default NotFound;
