import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardNews from './CardNews';
import { AuthContext } from '../../providers/AuthProvider';

const Category = () => {
    const categoryNes = useLoaderData();
    const { news } = useContext(AuthContext);
    const [categoryNews, setCategoryNews] = useState(news);
    // console.log(news);
    // console.log(categoryNews);

    useEffect(() => {
        if (categoryNes.id == 0) {
            setCategoryNews(news);
        } else {
            const newsCategory = news.filter(n => n.category == categoryNes.id);
            setCategoryNews(newsCategory)
        }
    }, [categoryNes, news])

    return (
        <div>
            {
                categoryNews.map(news => <CardNews key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;