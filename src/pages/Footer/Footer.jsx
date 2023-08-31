import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-dark text-white text-center'>
            <div className='p-2 p-md-5'>
                <p className='m-0 '><small><b>প্রতিষ্ঠাতা সম্পাদকঃ</b> লিয়াকত আলী খান,সম্পাদকঃমোহাম্মদ সাজেদুর রহমান খান</small></p>
                <p className=' m-0'><small><b>আইটি সম্পাদকঃ</b> জনি</small></p>
                <p className=' m-0'><small><b>মোবাইলঃ </b>০১৫৪০০৬৮১৪০</small></p>
                <p className='m-0'><small><b>ইমেইলঃ </b>info.dbnews24@gmail.com</small></p>
                <p className='m-0'>Copyright ©{currentYear} DBNEWS24. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;