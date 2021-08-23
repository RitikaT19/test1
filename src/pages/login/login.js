import React from 'react'
import LoginForm from './loginForm'
import '../Form.css'

const Login = () =>{
    return(
        <div className = "form-container">
            <span className = "close-btn">X</span>
            <div className = 'form-content-left'>
                <img className = "form-img" src="img/img-2.svg" alt='spaceship'></img>
            </div>
            <LoginForm/>
        </div>
    )
}
export default Login