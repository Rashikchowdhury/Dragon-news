import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../componets/Header';
import LatestNews from '../componets/LatestNews';
import Navbar from '../componets/Navbar';
import LeftAside from '../componets/LeftAside';
import RightAside from '../componets/RightAside';

const HomeLayout = () => {
    return (
        <div className='mt-4 w-[80vw] m-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='mt-14 grid grid-cols-12 gap-8'>
                <aside className='col-span-3 h-fit sticky top-2'>
                    <LeftAside></LeftAside>
                </aside>

                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 h-fit sticky top-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;