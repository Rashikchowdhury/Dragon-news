import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-4'>
            <div className=" w-1/9">

            </div>

            <div className="nav flex gap-4 text-accent">
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className="login-btn flex items-center gap-2">
                <img src={user} alt="" />
                <NavLink to={"/auth/login"}><button className="btn btn-primary text-white px-10">Login</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;