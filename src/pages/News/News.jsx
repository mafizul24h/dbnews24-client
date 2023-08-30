import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { category, title, details, photo } = news;
    // console.log(news);
    const navigate = useNavigate();

    return (
        <div >
            <Card >
                <Card.Img variant="top" src={photo && photo} />
                <Card.Body>
                    <Card.Title className='fw-bold text-success'>{title}</Card.Title>
                    <Card.Text>
                        {details && details}
                    </Card.Text>
                    {/* <Link to={`/category/${category && category}`}><Button variant="danger"><FaArrowLeft /> All news in this category</Button></Link> */}
                    <button onClick={() => navigate(-1)} className='btn btn-danger'><FaArrowLeft /> All News Theis Category</button>
                </Card.Body>
            </Card>
            <EditorsInsight />
        </div>
    );
};

export default News;