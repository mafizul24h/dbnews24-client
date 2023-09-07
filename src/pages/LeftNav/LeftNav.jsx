import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftCard from './LeftCard';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../providers/AuthProvider';

const LeftNav = () => {
    const {news} = useContext(AuthContext);
    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     fetch('https://dbnew24-server.vercel.app/news')
    //         .then(res => res.json())
    //         .then(data => setNews(data))
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <div>
            <button className='mb-2 fw-bold btn btn-outline-secondary w-100'>শিরোনাম</button>
            <div className='mb-4 overFlow'>
                {
                    news?.slice(0, 50).map(n => <p key={n._id} className='fw-bold headline'>
                        <small><Link to={`/news/${n._id}`} className='text-decoration-none text-dark '>{n.title}</Link></small>
                    </p>)
                }
            </div>
            <div className='my-2 d-none d-md-block'>
                <LeftCard />
            </div>
        </div>
    );
};

export default LeftNav;