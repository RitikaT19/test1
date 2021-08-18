export default function validateInfo(values){
    let errors = {}

    //first Name validation
    if(!values.firstName){
        errors.firstName = "First name required"
    }

    //last Name validation
    if(!values.lastName){
        errors.lastName = "Last name required"
    }

    //Email validation
    if(!values.email){
        errors.email = "Email Id required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid"
    }

    //Password validation
    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length<7){
        errors.password = "Password needs to be atleast 8 characters"
    }
    return errors;
}