/**
 * @module       page
 * @file         Registration.jsx
 * @description  registration page
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        17/08/2021
----------------------------------------------------------------------------------------------- */
import React from 'react'
import '../css/Registration.css'

const Registration = () =>{
    return(
        <div className = "box">
            <form action =''>
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' autoComplete = "off" name='firstName' id='firstName'></input>
                </div>

                <div>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' autoComplete = "off" name='lastName' id='lastName'></input>
                </div>

                <div>
                <label htmlFor='emailId'>Email Id</label>
                <input type='text' autoComplete = "off" name='emailId' id='emailId'></input>
                </div>

                <div>
                <label htmlFor='password'>Password</label>
                <input type='password' autoComplete = "off" name='password' id='password'></input>
                </div>
            </form>

            <button type="submit">Register</button>

        </div>
    )
}

export default Registration