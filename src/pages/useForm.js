/**
 * @module       pages
 * @file         userForm.js
 * @description  holds the hooks the form
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/08/2021
----------------------------------------------------------------------------------------------- */
import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e =>{
        const { name, value } = e.target
       setValues({
           ...values,
           [name]:value
       })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
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