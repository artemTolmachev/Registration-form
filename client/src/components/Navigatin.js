import React from 'react';
import {Link} from 'react-router-dom';
import 'components/Navigation.scss';

function Navigatin(props) {
    return (
        <nav className='nav'>
            <li className='nav__list'><Link className='nav__link' to='/'>Home</Link></li>
            <li className='nav__list'><Link className='nav__link' to='/egypt'>Egyptian night</Link></li>
            <li className='nav__list'><Link className='nav__link' to='/seychelles'>Seychelles</Link></li>
        </nav>
    );
}

export default Navigatin;