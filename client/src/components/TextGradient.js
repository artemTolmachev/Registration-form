import React from 'react';
import 'components/TextGradient.scss';
function TextGradient(props) {
    return (
        <div className='text'>
            <img src={props.text} alt="" />
        </div>
    );
}

export default TextGradient;