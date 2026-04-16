import React from 'react';
import bannerImg from "../../assets/banner-main.png"


const Banner = ({handleCoin}) => {
    return (
        <div className='text-center space-y-3 mt-10'>
            <img className='mx-auto' src={bannerImg} alt="" />
            <h3 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p>Beyond Boundaries Beyond Limits</p>
            <button onClick={()=> handleCoin()} className='btn bg-[#E7FE29]'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;