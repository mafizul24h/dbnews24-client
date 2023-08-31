import React from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Trams = () => {
    const navigate = useNavigate();
    return (
        <Container className='my-5'>
            <Link className='btn btn-outline-primary mb-2 me-2' to='/category/0'><FaArrowLeft /> সকল খবর</Link>
            <button onClick={() => navigate(-1)} className='btn btn-outline-danger mb-2 me-2'><FaArrowLeft /> ফিরে যাও</button>
            <h2>Please Read Trams and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod, et, deleniti sapiente autem aliquid iste veniam maiores asperiores totam, eveniet reprehenderit. Similique quidem incidunt perspiciatis deleniti sequi esse autem doloribus eos vitae iusto possimus est fugiat repellendus officiis, ad voluptate odio fugit consequatur distinctio voluptatum mollitia? Sint nemo ab eveniet ad labore accusamus modi cupiditate. Quasi tenetur eaque impedit esse fuga ipsa quibusdam reiciendis ipsum. Expedita ducimus distinctio assumenda! Doloremque illum officia blanditiis fugiat dolores voluptatem enim quo esse atque totam, dolorem reiciendis minus obcaecati tempore deserunt aut quidem repudiandae! Iusto, labore? Vel itaque voluptatum temporibus facere quis quibusdam!</p>
        </Container>
    );
};

export default Trams;