import React from 'react';
import {useField, ErrorMessage} from 'formik';
import './Field.scss';

import 'utils/inputs/Field.scss';
export const Field = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className='form-control-wr'>
            <input 
            {...field} {...props}
            className={`form-control shadow-none ${meta.touched && meta.error && 'is invalid'}`}
            autoComplete="off"
            name={field.name}
            />
            <div className="error-wr">
                <ErrorMessage component="div" name={field.name} className="error"/>
            </div>
        </div>
    );
}

