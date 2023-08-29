import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, details, image_url } = news;
    // console.log(news);

    return (
        <div >
            <Card >
                <Card.Img variant="top" src={image_url && image_url} />
                <Card.Body>
                    <Card.Title className='fw-bold text-success'>{title}</Card.Title>
                    <Card.Text>
                        {details && details}
                    </Card.Text>
                    <Link to={`/category/${category_id && category_id}`}><Button variant="danger"><FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight />
        </div>
    );
};

export default News;