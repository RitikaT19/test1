/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        19/08/2021  
-----------------------------------------------------------------------------------------------*/
import Axios from 'axios'
require('dotenv').config()
const BASE_URL = "http://localhost:4000";

export class User{
    registerUser = (userDetails) => {
        return Axios.post(BASE_URL+'/registerUser', userDetails)
    }
}