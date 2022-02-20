import React from 'react';
import User from 'image/user.png';

import 'components/Profile.scss';

function Profile(props) {
    return (
        <div className='profile'>
            <img src={User} alt="user-icon" />
        </div>
    );
}

export default Profile;