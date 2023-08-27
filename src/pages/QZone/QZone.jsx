import React from 'react';
import qzone1 from './../../assets/qZone1.png'
import qzone2 from './../../assets/qZone2.png'
import qzone3 from './../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light rounded p-3'>
            <h4 className='mb-3'>Q-Zone</h4>
            <img className='img-fluid mb-2' src={qzone1} alt="QZone" />
            <img className='img-fluid mb-2' src={qzone2} alt="QZone" />
            <img className='img-fluid mb-2' src={qzone3} alt="QZone" />
        </div>
    );
};

export default QZone;