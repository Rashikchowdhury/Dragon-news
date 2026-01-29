import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-85 mb-3' src={logo} alt="" />

            <p className='text-accent'>Journalism Without Fear or Favour</p>

            <p className='text-accent font-medium'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;