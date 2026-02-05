import React, { use } from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
import { AuthContext } from '../Provider/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { currentUser } = use(AuthContext);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("User loged out successfully")
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div className='flex items-center justify-between mt-4'>
            <div className="">
                {
                    currentUser ? currentUser.displayName : ""
                }
            </div>

            <div className="nav flex gap-4 text-accent">
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className="login-btn flex items-center gap-2">
                <img src={currentUser?.photoURL ? currentUser.photoURL : user} alt="" className='w-12 h-12 rounded-full object-cover' />

                {
                    currentUser ?
                        <button onClick={handleLogout} className='btn btn-primary text-white'>Logout</button>
                        :
                        <NavLink to={"/auth/login"}><button className="btn btn-primary text-white px-10">Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;