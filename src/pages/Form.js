/**
 * @module       pages
 * @file         Form.js
 * @description  This page will get rendered on the webpage
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/08/2021
----------------------------------------------------------------------------------------------- */
import React, {useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
        }
    return (
        <>
        <div className="form-container">
            <span className = "close-btn">X</span>
            <div className = "form-content-left">
                <img className = "form-img" src="img/img-2.svg" alt='spaceship'></img>
            </div>
            {!isSubmitted ? <FormSignUp submitForm = {submitForm} /> : <FormSuccess />}

        </div>
        </>
    )
}

export default Form
