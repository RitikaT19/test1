import React from 'react'

const FormSignUp = () => {
    return (
        <div className = "form-content-right">
            <form className="form">
                <h1>
                    Get started with us! Please fill this form to register yourself
                </h1>
                <div className = "form-inputs">
                    <label htmlFor="firstName" className ="form-label">
                        First Name
                    </label>
                    <input id ="firstName" type="text" name="firstName" className="form-input" placeholer = "Enter your firstName"/>
                    
                </div>

                <div className = "form-inputs">
                    <label htmlFor="lastName" className ="form-label">
                        Last Name 
                    </label>
                    <input id = "lastName" type="text" name="lastName" className="form-input" placeholer = "Enter your lastName"/>
                    
                </div>

                <div className = "form-inputs">
                    <label htmlFor="email" className ="form-label">
                        Email ID
                    </label>
                    <input id ="email" type="email" name="email" className="form-input" placeholer = "Enter your email"/>
                    
                </div>

                <div className = "form-inputs">
                    <label htmlFor="password" className ="form-label">
                        Password 
                    </label>
                    <input id = "password" type="password" name="password" className="form-input" placeholer = "Enter your password"/>
                    
                </div>
            </form>
        </div>
    )
}

export default FormSignUp

