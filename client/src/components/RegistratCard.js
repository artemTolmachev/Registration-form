import React from 'react';
import { Login } from 'components/Login';
import ElementLeft from 'image/element-bg-left.png';
import ElementRight from 'image/element-bg-right.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import {SingUp} from 'components/SingUp';
import {useDispatch} from 'react-redux';
import {removeUser} from 'store/slices/userSlices';
import Profile from 'components/Profile';
import 'components/RegistarCard.scss';

function RegisterCard(props) {
    const id = useLocation('/');
    const dispatch = useDispatch();
    console.log()
    return (
        <div className='registar-card'>
            <div className="title-wr">
                <h1>{props.heading}</h1>
            </div>
            {id.pathname !== '/profile' ? 
            <Link className='registar-card__link' to={props.link}>{props.title}</Link>
            :
            <Link className='registar-card__link' to={props.link} onClick={()=> dispatch(removeUser())}>log out</Link>
        }
            <div className="registar-card__el-left">
                <img src={ElementLeft} alt="decotration-element"/>
            </div>
            <div className="registar-card__el-right">
                <img src={ElementRight} alt="decotration-element"/>
            </div>
            {id.pathname === '/login' && <Login/>}
            {id.pathname === '/registrat' && <SingUp/>}
            {id.pathname === '/profile' && <Profile/>} 
        </div>
    );
}

export default RegisterCard;

