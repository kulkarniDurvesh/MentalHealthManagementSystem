export const Validate = (values) => {
    alert("Reaching")
    const errors = {};
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    //const userNameValidator=  /^[a-z]{6,16}$/
    const userNameValidator= /^[a-z][a-z0-9]*([a-z0-9]+){0,3}$/
    const mobileValidator= /^([0-9]{10})$/;
    const fullnameValidator=/^[a-zA-Z ]{1,40}$/
    if (!values.userName) {
      errors.userName = "Username is required!";
                                        
    } else if (!userNameValidator.test(values.userName)) {
     errors.userName = "Username not in correct format";
    } 
    
    if (!values.fullName) {
      errors.fullName = "Fullname is required!";
    } else if (!fullnameValidator.test(values.fullName)) {
      errors.fullName = "This is not a valid format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailValidator.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } 
    if (!values.mobileNo) {
      errors.mobileNo = "Mobile no. is required";
    } else if (!mobileValidator.test(values.mobileNo)) {
      errors.mobileNo = "Enter Correct Mobile No.";
    
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordValidator.test(values.password)) {
      errors.password = "Password not in correct format";
      //errors.password = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";;
    
    }
    if (!values.conPassword) {
      errors.conPassword = "Enter your password again";
    } else if (values.password!==values.conPassword) {
      errors.conPassword= "Password does not match";
    } 

    if(values.gender === '--SELECT GENDER--'){
      errors.gender = "gender is required"
    }
    if(values.specialization === '--SELECT SPECIALIZATION--'){
      errors.specialization = "specialization is required"
    }

    return errors;
  };