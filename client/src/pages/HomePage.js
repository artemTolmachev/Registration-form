import React from 'react';
import {Link} from 'react-router-dom';
import TextGradient from 'components/TextGradient';

import Text from 'image/Text-2.png';
import 'pages/HomePage.scss';


function HomePage(props) {
    return (
        <div className='home'>
            <TextGradient text={Text}/>
        </div>
    );
}

export default HomePage;