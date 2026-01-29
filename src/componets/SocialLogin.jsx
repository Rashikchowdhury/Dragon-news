import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='flex flex-col gap-4 mt-4'>
                <button className="btn btn-outline btn-secondary">
                    <FcGoogle size={20}/> Login with Google
                </button>
                <button className="btn btn-outline btn-primary">
                    <FaGithub size={20}/> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;