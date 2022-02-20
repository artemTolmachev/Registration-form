import React from 'react';
import TextGradient from 'components/TextGradient';

import Text from 'image/Text-3.png';
import './Seychelles.scss';

function Seychelles(props) {
    return (
        <div className='seychelles-page'>
            <TextGradient text={Text}/>
        </div>
    );
}

export default Seychelles;