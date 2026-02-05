import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../componets/Loading';

const PrivetRoutes = ({ children }) => {
    const { currentUser, loading } = use(AuthContext);

    const {pathname} = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (currentUser && currentUser?.email) {
        return children;
    }

    return <Navigate state={pathname} to={"/auth/login"}></Navigate>
};

export default PrivetRoutes;