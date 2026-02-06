import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Qzone';
import { AuthContext } from '../Provider/AuthContext';

const RightAside = () => {
    const { currentUser } = use(AuthContext)

    return (
        <div className='space-y-8'>
            {currentUser ? "" : <SocialLogin></SocialLogin>}
            {/* <SocialLogin></SocialLogin> */}
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;