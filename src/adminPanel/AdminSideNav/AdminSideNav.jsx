import React from 'react';
import { NavLink } from "react-router-dom";

const AdminSideNav = () => {
    return (
        <div className=''>
            <ul className='list-unstyled'>
                <li className='mb-2'><NavLink to='/admin/add-news' className={({ isActive }) => isActive ? 'btn btn-warning w-100' : 'btn btn-secondary w-100'}>Add News</NavLink></li>
            </ul>

            <div>
                
            </div>
        </div>
    );
};

export default AdminSideNav;