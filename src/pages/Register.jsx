import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center h-[80vh] items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <fieldset className="fieldset card-body">
                    {/* Name  */}
                    <label className="label">Name</label>
                    <input
                        name="Name"
                        type="text"
                        className="input"
                        placeholder="Name"
                        required
                    />
                    {/* photo_url  */}
                    <label className="label">Photo_url</label>
                    <input
                        name="Photo_url"
                        type="text"
                        className="input"
                        placeholder="Photo_url"
                        required
                    />
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
                    <input
                        name="password"
                        type="password"
                        className="input"
                        placeholder="Password"
                        required
                    />

                    <button type="submit" className="btn btn-neutral mt-4">
                        Register
                    </button>
                    <p className="font-semibold text-center pt-5">
                        Already Have An Account ? {""}
                        <Link className="text-secondary" to="/auth/login">
                            Login
                        </Link>
                    </p>
                </fieldset>
            </div>
        </div>
    );
};

export default Register;