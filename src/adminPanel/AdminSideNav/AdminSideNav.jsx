import React from 'react';
import { Link, NavLink } from "react-router-dom";

const AdminSideNav = () => {
    return (
        <div className=''>
            <ul className='list-unstyled'>
            <Link className='btn btn-primary w-100 mb-2' to='/category/0'>Home</Link>
                <li className='mb-2'><NavLink to='/admin/add-news' className={({ isActive }) => isActive ? 'btn btn-warning w-100' : 'btn btn-secondary w-100'}>Add News</NavLink></li>
                <li className='mb-2'><NavLink to='/admin/all-news' className={({ isActive }) => isActive ? 'btn btn-warning w-100' : 'btn btn-secondary w-100'}>All News</NavLink></li>
            </ul>

            <div>
                
            </div>
        </div>
    );
};

export default AdminSideNav;