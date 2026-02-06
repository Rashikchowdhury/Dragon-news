import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { signInWithGoogle } = use(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            toast.success(`${result.user.email} loged in successfully`)
        })
        .catch(error => {
            toast.error(error)
        })
    }
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='flex flex-col gap-4 mt-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">
                    <FcGoogle size={20} /> Login with Google
                </button>
                <button className="btn btn-outline btn-primary">
                    <FaGithub size={20} /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;