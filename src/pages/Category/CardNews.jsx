import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from 'react-icons/fa';
import moment from 'moment';
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CardNews = ({ news }) => {
    const { _id, title, reporter, photo, details, publish_date } = news;
    // console.log(news);
    const [read, setRead] = useState(true);

    return (
        <Card className='mb-2'>
            {/* <Card.Header className='d-flex align-items-center'>
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
            </Card.Header> */}
            <Card.Body>
                <Card.Title className='fw-bold fs-6'>{title && title}</Card.Title>
                <Card.Img variant="top" src={photo && photo} />
                <Card.Text className='mt-2'>
                    {/* {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>} */}
                    {read ? 
                    <><p className='m-0'> {details?.substring(0, 150)}...<span onClick={() => setRead(!read)} className='btn-link text-primary' style={{cursor:'pointer'}}>Read More</span> </p></>
                     : 
                    <><p className='m-0'> {details && details}
                    {/* ...<span onClick={() => setRead(!read)} className='btn-link text-primary' style={{cursor: 'pointer'}} >Read Less</span> */}
                    </p>  
                    </>

                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex align-items-center'>
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                    <p className='mb-0'><small><b>রিপোর্টার:</b> {reporter}</small></p>
                    {/* <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly /> <span>{rating?.number}</span> */}
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
                    <p className='m-0'><small><b>তারিখ:</b> {moment(publish_date).format('YYYY-MM-D')}</small></p>
                    {/* <FaEye className='me-2' /> {total_view} */}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CardNews;