/**
 * @module       pages/login
 * @file         login.js
 * @description  holds the code for login page
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        23/08/2021
----------------------------------------------------------------------------------------------- */

import React from 'react'
import '../Form.css'

const LoginForm = () => {
    return (
        <div className = "form-content-right">
            <form className = "form">
                <h1>
                    Fill you credentials to login!
                </h1>
                <div className = "form-inputs">
                    <label htmlFor="email" className = "form-label">
                        Email ID
                    </label>
                    <input id ="firstName" 
                    type="text" name="firstName" 
                    className="form-input" 
                    placeholder = "Enter your email id"/>
                </div>

                <div className = "form-inputs">
                    <label htmlFor="password" className ="form-label">
                        Password 
                    </label>
                    <input id = "password" 
                    type="password" 
                    name="password" 
                    className="form-input" 
                    placeholder = "Enter your password"/>
                </div>
                    <button className = "form-input-btn" type="submit">
                        Login
                    </button>
            </form>
            
        </div>
    )
}

export default LoginForm