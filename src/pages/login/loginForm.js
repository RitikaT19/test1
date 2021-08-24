/**
 * @module       pages/login
 * @file         login.js
 * @description  holds the code for login page
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        23/08/2021
----------------------------------------------------------------------------------------------- */

import React from 'react'
import '../Form.css'
import validateInfo from '../validateInfo'
import useLogin from './useLogin'

const LoginForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } = useLogin(submitForm, validateInfo)
    return (
        <div className = "form-content-right">
            <form className = "form" onSubmit = {handleSubmit}>
                <h1>
                    Fill you credentials to login!
                </h1>
                <div className = "form-inputs">
                    <label htmlFor="email" 
                    className ="form-label">
                        Email ID
                    </label>
                    <input id ="email" 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder = "Enter your email"
                    value={values.email}
                    onChange = {handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                    
                </div>

                <div className = "form-inputs">
                    <label htmlFor="password" className ="form-label">
                        Password 
                    </label>
                    <input id = "password" 
                    type="password" 
                    name="password" 
                    className="form-input" 
                    placeholder = "Enter your password"
                    value={values.password}
                    onChange = {handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                    <button className = "form-input-btn" type="submit">
                        Login
                    </button>
                <span className = 'form-input-login'>
                    Don't have an account? Signup <a href='/register'>here</a>
                </span>
            </form>
            
        </div>
    )
}

export default LoginForm