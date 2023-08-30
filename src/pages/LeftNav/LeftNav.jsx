import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftCard from './LeftCard';

const LeftNav = () => {
    const [news, setNews] = useState([]);
    // console.log(news[0]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div>
            <button className='my-2 fw-bold btn btn-outline-secondary w-100'>শিরোনাম</button>
            <div className='mb-4 overFlow'>
                {
                   news.map(n => <p key={n._id} className='fw-bold'><Link to={`/news/${n._id}`} className='text-decoration-none text-dark h:text-blue-400'>{n.title}</Link></p>)
                }
            </div>
            <div className='my-2 d-none d-md-block'>
                <LeftCard />
            </div>
        </div>
    );
};

export default LeftNav;