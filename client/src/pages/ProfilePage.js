import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {useAuth} from 'hooks/use-auth';
import RegistarCard from 'components/RegistratCard';

import 'pages/ProfilePage.scss';


function ProfilePage(props) {
    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div className='profile-page background'>
            <div className="container">
                <RegistarCard
                link="#"
                heading='Profile'
                />
            </div>
        </div>
    ) : (
        <Redirect to='/login'/>
    )
}

export default ProfilePage;