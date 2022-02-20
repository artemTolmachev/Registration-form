import React from 'react';
import {Link} from 'react-router-dom';
import RegistratCard from 'components/RegistratCard';
import 'pages/RegistarPage.scss';
export const RegisterPage = () => {

    return (
        <div className='registar-page background'>
            <RegistratCard
                link='/login'
                title='Login'
                heading='Registrat'
            />
        </div>
    );
}

