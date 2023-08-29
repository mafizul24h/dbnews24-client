import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h2>Admin </h2>
            <div className='row'>
                <div className='col-4 p-2'>
                    <h2>SideNav</h2>
                </div>
                <div className='col-8 p-2'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;