import React, { Suspense, use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleCategoryNews from '../componets/SingleCategoryNews';

const newsPromise = fetch("/news.json").then(res => res.json())

const CategoryNews = () => {
    const { id } = useParams()
    const newsData = use(newsPromise);

    const [categoriNews, setCategoryNews] = useState([])

    useEffect(() => {
        const filteredNews = newsData.filter((news) => {
            if(id == "0"){
                return news
            }
            else if(id == "1"){
                return news.others.is_today_pick == true
            }
            else {
                return news.category_id == id
            }
    })
        
        const newarr = () => { setCategoryNews(filteredNews) }
        newarr()
    }, [id, newsData])


    return (
        <div>
            <div className={"grid grid-cols-1 gap-8 mb-8"}>
                {
                    categoriNews.map(news => <SingleCategoryNews key={news.id} news={news}></SingleCategoryNews>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;