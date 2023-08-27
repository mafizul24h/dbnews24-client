import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from 'react-icons/fa';
import moment from 'moment';
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CardNews = ({ news }) => {
    const { _id, title, author, image_url, details, rating, total_view } = news;
    // console.log(news);

    return (
        <Card className='mb-2'>
            <Card.Header className='d-flex align-items-center'>
                <div className='d-flex align-items-center gap-3 flex-grow-1'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div>
                        <h5 className='mb-0'>{author?.name}</h5>
                        <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2 fs-4' />
                    <FaShareAlt className='fs-4' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex align-items-center'>
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                    <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly /> <span>{rating?.number}</span>
                </div>
                {/* <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-warning'/>}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                    />
                    {rating?.number}
                </div> */}
                <div>
                    <FaEye className='me-2' /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CardNews;