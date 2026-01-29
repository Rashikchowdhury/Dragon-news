import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3 mt-6'>
            <p className='bg-secondary text-white p-2'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque ut similique cumque, earum aut consequuntur quisquam nostrum, nisi praesentium impedit incidunt
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;