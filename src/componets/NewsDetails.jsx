import React from 'react';
import Header from './Header';
import RightAside from './RightAside';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const { id } = useParams();
    const AllNews = useLoaderData();
    const news = AllNews.find(news => news.id == id);

    const { title, image_url, details, category_id } = news;

    return (
        <div className='mt-4 w-[60vw] m-auto'>
            <Header></Header>
            <div className='grid grid-cols-12 gap-12'>
                <div className='col-span-9'>
                    <h2 className='font-bold text-xl'>Dragon News</h2>
                    <div className='border border-gray-200 p-4 rounded-xl mt-4 space-y-3'>
                        <div className=''>
                            <img className='w-full rounded-xl' src={image_url} alt="" />
                        </div>
                        <p className='font-bold text-xl'>
                            {title}
                        </p>
                        <p className='text-accent'>
                            {details}
                        </p>

                        <Link to={`/category/${category_id}`}>
                            <button className='btn btn-secondary text-white'>
                                <FaArrowLeft />
                                All news in this category
                            </button>

                        </Link>
                    </div>
                </div>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;