import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { Link } from 'react-router';

const SingleCategoryNews = ({ news }) => {

    const { title, author, image_url, details, rating, total_view, id } = news

    const publishedDate = new Date(author.published_date).toLocaleDateString()


    return (
        <div className={"rounded-xl hover:shadow-2xl transition-shadow"}>
            <div className='flex justify-between items-center bg-base-200 p-3 rounded-t-xl'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <img className={"w-10 rounded-full"} src={author.img} alt="" />
                    </div>
                    <div>
                        <p>{author.name}</p>
                        <p>{publishedDate}</p>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <IoMdShare size={20} />
                    <FaRegBookmark size={20} />
                </div>
            </div>

            <div className='p-4 border-l border-r border-b border-base-200 rounded-b-xl'>
                <div>
                    <p className='font-bold text-xl mb-5'>{title}</p>
                    <div>
                        <img
                            src={image_url}
                            alt=""
                            className='w-full object-cover rounded-xl mb-7' />
                    </div>

                    <div className='text-accent mb-5'>
                        {details && details.length > 400 ? (
                            <>
                                {details.slice(0, 400)}......
                                <span className="text-blue-500 cursor-pointer">
                                    <Link to={`/newsDetails/${id}`}>read more</Link>
                                </span>
                            </>
                        ) : (
                            details || "No details available"
                        )}
                    </div>

                </div>

                <div className={'flex  justify-between border-t border-accent'}>
                    <div className='flex items-center gap-2 mb-2'>
                        <div className="rating rating-xs">
                            {[...Array(5)].map((_, index) => (
                                <input
                                    key={index}
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked={index < Math.round(rating.number)}
                                    readOnly
                                />
                            ))}
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryNews;