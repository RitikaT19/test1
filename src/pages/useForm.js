/**
 * @module       pages
 * @file         userForm.js
 * @description  holds the hooks the form
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/08/2021
----------------------------------------------------------------------------------------------- */
import { useState, useEffect } from "react";
import { User } from '../service/user'
const user = new User()

const initialValues = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    
}
const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState(
        initialValues
    )
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e =>{
        const { name, value } = e.target
       setValues({
           ...values,
           [name]:value
       })
    }

    function axiosFunction(userDetails){
        user.registerUser(userDetails)
            .then((res)=>{
                alert('You are successfully logged in!')
                console.log(res.data.message)
                alert("You are successfully registered!")
            })
            
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
        axiosFunction(values);
    

    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])
    return { handleChange, values, handleSubmit, errors };
}
export default useForm;