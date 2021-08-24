/* eslint-disable jsx-a11y/img-redundant-alt */
/**
 * @module       pages
 * @file         LoginSuccess.js
 * @description  success page
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        24/08/2021
----------------------------------------------------------------------------------------------- */
import React from 'react'

const LoginSuccess = () => {
    return (
        <div className = "form-content-right">
            <div className = "form-success">You are successfully logged in!</div>
            <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
        </div>
    )
}

export default LoginSuccess