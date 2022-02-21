import React from 'react';
import Navigatin from './Navigatin';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router";


function Header(props) {
    const id = useLocation('/');

    return (
        <div className='header'>
                {id.pathname !== '/registrat' && id.pathname !==  '/login' && id.pathname !==  '/profile' ? 
                    <div className="header-wr">
                        <div className="container">
                            <div className="header__wr">
                                    <div className="header__nav">
                                        <Navigatin/>
                                    </div>
                                    
                                    <div className="header__sing">
                                        <Link className='header__link-btn header__link-solid' to='/registrat'>Sing up</Link>
                                        <Link className='header__link-btn' to='/login'>Sing in</Link>
                                    </div>
                                </div>
                            </div>
                    </div>  
                        :
                <div className='header__inner'>
                    <div className="container">
                        <Link className='header__link-btn' to='/'>Home</Link>
                    </div>
                </div>
                }  
        </div>
    );
}

export default Header;