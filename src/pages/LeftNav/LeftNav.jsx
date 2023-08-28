import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import LeftCard from './LeftCard';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() => {
        fetch('https://dbnew24-server-mafizul24h.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div className='overFlow'>
            <div>
                {
                    categories.map(category => <div key={category.id} className='pb-2'>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-dark'><button type="button" class="btn btn-outline-secondary fw-bold w-100">{category.name}</button></Link>
                    </div>)
                }
            </div>
            <div className='my-2'>
                <LeftCard />
            </div>
        </div>
    );
};

export default LeftNav;