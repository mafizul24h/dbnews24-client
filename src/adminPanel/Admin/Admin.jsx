import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideNav from '../AdminSideNav/AdminSideNav';

const Admin = () => {
    return (
        <div>
            <div className='row'>
                <div style={{backgroundColor: '#A9A9A9'}} className='col-2 p-2 min-vh-100'>
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