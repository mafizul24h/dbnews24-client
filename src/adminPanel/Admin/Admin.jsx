import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSideNav from '../AdminSideNav/AdminSideNav';

const Admin = () => {
    return (
        <div>
            <Link className='btn btn-primary px-5' to='/category/0'>Home</Link>
            <div className='row'>
                <div className='col-2 p-2'>
                    <AdminSideNav/>
                </div>
                <div className='col-10 p-2'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;