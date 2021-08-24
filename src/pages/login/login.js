import React, {useState} from 'react'
import LoginForm from './loginForm'
import '../Form.css'
import LoginSuccess from './loginSuccess'

const Login = () => {
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
            {!isSubmitted ? <LoginForm submitForm = {submitForm} /> : <LoginSuccess />}

        </div>
        </>
    )
}

export default Login