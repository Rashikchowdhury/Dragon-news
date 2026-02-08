import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoriesPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoriesPromise);

    return (
        <div>
            <h2 className='font-bold'>All categories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-4'>
                {categories.map(category =>
                    <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={"btn bg-base-100 border-0 hover:bg-base-200 text-accent"}
                    >
                        {category.name}
                    </NavLink>)}
            </div>
        </div>
    );
};

export default Categories;