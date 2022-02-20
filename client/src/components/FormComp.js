import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Field } from '../utils/inputs/Field';
import Button from 'image/button1.png';
import Lock from 'image/lock.png';
import Icon from 'image/@.png';
import {ErrorMessage} from 'formik';

import 'components/FormComp.scss';
const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(6, 'Password at least must be 6 charaters')
    .required('Password is required'),
  });

const FormComp = ({title, hendlClick}) => {
  
    return (
        <div className="form-wr">
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    hendlClick(values.email, values.password)
                }}
                >
                {formik => (
                    <Form className='form'>
                         <img className='icon-s' src={Icon} alt="decoration button"/> 
                        <Field name="email" type="email" label="Email" />  
                        <img className='icon-lock' src={Lock} alt="decoration button"/>                  
                        <Field  name="password" type="password" label="Password"/>
                        <button className='form-btn' type='submit'>
                            <img src={Button} alt="decoration button"/>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export {FormComp};