import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase.config';

const Register = () => {
    const { signUpUser, updateUserProfile } = use(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo_url = e.target.photo_url.value;

        signUpUser(email, password)
            .then(result => {
                updateUserProfile({ displayName: name, photoURL: photo_url })
                    .then(() => {
                        toast.success(`Registerd with: ${result.user.email}`);
                        navigate("/")
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
            .catch(error => alert(error))

    }

    return (
        <div className="flex justify-center h-[80vh] items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="fieldset card-body">
                    {/* Name  */}
                    <label className="label">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="input"
                        placeholder="Name"
                        required
                    />
                    {/* photo_url  */}
                    <label className="label">Photo_url</label>
                    <input
                        name="photo_url"
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
                </form>
            </div>
        </div>
    );
};

export default Register;