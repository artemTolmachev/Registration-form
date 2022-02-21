import React from 'react';
import { Link } from 'react-router-dom';
import RegistarCard from 'components/RegistratCard';

import './LoginPage.scss';

export const LoginPage = () => {

    return (
        <div className='login-page background'>
            <div className="container">
                <RegistarCard
                    link='/registrat'
                    title='Registrat'
                    heading='Login'
                />
            </div>
        </div>
    );

}
