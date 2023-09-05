import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;