import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardNews from './CardNews';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            {id && <h1>This Category News {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <CardNews key={news._id } news={news} />)
            }
        </div>
    );
};

export default Category;