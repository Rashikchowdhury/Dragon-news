import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                toast.success(`login with: ${result.user.email}`)
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch(error => {
                alert(error)
            })
    }

    const [showPass, setShowPass] = useState(true)

    const showPassword = () => {
        setShowPass(!showPass)
    }

    return (
        <div className="flex justify-center h-[80vh] items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Login your account
                </h2>
                <form onSubmit={handleSignIn} className="fieldset card-body">
                    {/* email  */}
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input"
                        placeholder="Email"
                        required
                    />
                    {/* passowrd  */}
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input
                            name="password"
                            type={showPass ? "password" : "text"}
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <button onClick={showPassword} type='button' className='absolute right-6 top-3' >
                            {
                                showPass ?
                                    <FaRegEye size={15} />
                                    :
                                    <FaEyeSlash size={15} />
                            }
                        </button>
                    </div>
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-neutral mt-4">
                        Login
                    </button>
                    <p className="font-semibold text-center pt-5">
                        Dont’t Have An Account ?{" "}
                        <Link className="text-secondary" to="/auth/register">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;