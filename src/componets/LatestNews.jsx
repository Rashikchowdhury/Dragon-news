import React, { use } from 'react';
import Marquee from 'react-fast-marquee';

const newsPromise = fetch("/news.json").then(res => res.json())

const LatestNews = () => {
    const news = use(newsPromise)

    const allBreakingNews = news.filter(news => news.others.is_today_pick == true)

    const breakingNews = allBreakingNews.map(news => news.title + ". ")

    return (
        <div className='flex items-center gap-4 bg-base-200 p-3 mt-6'>
            <p className='bg-secondary text-white p-2'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='font-semibold'>
                    {breakingNews}
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;