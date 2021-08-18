import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'
import './Form.css'


const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
    return (
        <div className = "form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Get started with us! Please fill this form to register yourself
                </h1>
                <div className = "form-inputs">
                    <label htmlFor="firstName" 
                    className ="form-label">
                        First Name
                    </label>
                    <input id ="firstName" 
                    type="text" 
                    name="firstName" 
                    className="form-input" 
                    placeholder = "Enter your firstName"
                    value={values.firstName}
                    onChange = {handleChange}/>
                    {errors.firstName && <p>{errors.firstName}</p>}
                    
                </div>

                <div className = "form-inputs">
                    <label htmlFor="lastName" 
                    className ="form-label">
                        Last Name 
                    </label>
                    <input id = "lastName" 
                    type="text" 
                    name="lastName" 
                    className="form-input" 
                    placeholder = "Enter your lastName" 
                    value={values.lastName}
                    onChange = {handleChange}/>
                    {errors.lastName && <p>{errors.lastName}</p>}
                    
                </div>

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
                    <label htmlFor="password" 
                    className ="form-label">
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
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default FormSignUp

