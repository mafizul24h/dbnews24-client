import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';
import moment from 'moment';

const News = () => {
    const news = useLoaderData();
    const { title, details, photo, reporter, publish_date } = news;
    // console.log(news);
    const navigate = useNavigate();

    return (
        <div >
            <div className='mb-3'>
                <button onClick={() => navigate(-1)} className='btn btn-outline-primary me-3'><FaArrowLeft /> Go Back</button>
                <Link className='btn btn-outline-success' to='/category/0'><FaArrowLeft /> GO Home</Link>
            </div>
            <Card >
                <Card.Img variant="top" src={photo && photo} />
                <Card.Body>
                    <Card.Title className='fw-bold text-success'>{title && title}</Card.Title>
                    <Card.Text>
                        {details && details}
                    </Card.Text>
                    {/* <Link to={`/category/${category && category}`}><Button variant="danger"><FaArrowLeft /> All news in this category</Button></Link> */}
                </Card.Body>
                <Card.Footer className='d-flex align-items-center'>
                    <div className='flex-grow-1 d-flex align-items-center gap-2'>
                        <p className='mb-0'><small><b>রিপোর্টার:</b> {reporter}</small></p>
                    </div>
                    <div>
                        <p className='m-0'><small><b>তারিখ:</b> {moment(publish_date).format('YYYY-MM-D')}</small></p>
                    </div>
                </Card.Footer>
            </Card>
            <div className='mt-3'>
                <button onClick={() => navigate(-1)} className='btn btn-outline-primary me-3'><FaArrowLeft /> ফিরে যাও</button>
                <Link className='btn btn-outline-success' to='/category/0'><FaArrowLeft /> সব খবর</Link>
            </div>
            <EditorsInsight />
        </div>
    );
};

export default News;