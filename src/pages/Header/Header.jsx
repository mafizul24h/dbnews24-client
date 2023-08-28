import React, { useContext } from 'react';
import moment from 'moment';
import logo from './../../assets/logo/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBer from './NavigationBer';

const Header = () => {

    return (
        <div>
            <div className='text-center text-dark my-2'>
                <img style={{height: "50px"}} src={logo} alt="" />
                <p><span className='fw-bold'>{moment().format('dddd, ')}</span>{moment().format('MMMM D, YYYY')}</p>
            </div>
            {/* <NavigationBer /> */}
            <div className='d-flex align-items-center my-3 container'>
                <Button variant="danger">শিরোনাম</Button>
                <Marquee pauseOnHover speed={40} className='bg-light py-2 text-danger'>
                    <div className='d-flex g-4'>
                        <p className='m-0 me-2'>সীতাকুণ্ডে রেলগেটে তিন পুলিশ সদস্য নিহতের ঘটনায় মামলা, আরও দুটি তদন্ত কমিটি গঠন| </p>
                        <p className='m-0 me-2'>নতুন মিত্রের খোঁজে সেভাবে সাড়া পাচ্ছে না আওয়ামী লীগ | </p>
                        <p className='m-0 me-2'>নেত্রকোনা মেডিকেল কলেজ ব্যবহারিকে ঘাটতি নিয়েই শিক্ষাজীবন শেষ | </p>
                        <p className='m-0 me-2'>সাবেক ধর্মমন্ত্রী মতিউর রহমান আর নেই |</p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;