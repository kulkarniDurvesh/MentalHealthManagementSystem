export const Validate = (values) => {
    const errors = {};
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const mobileValidator = /^([0-9]{10})$/;
    const fullnameValidator = /^[a-zA-Z ]{1,40}$/
    const pinCodeValidator = /^\d{3}\s?\d{3}$/;
    const cityValidator = /^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/
    const stateValidator = /^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/


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
    if (!values.pinCode) {
        errors.pinCode = "Pin Code is required!";
    } else if (!pinCodeValidator.test(values.pinCode)) {
        errors.pinCode = "This is not a valid format! of pin code";
    }
    if (!values.city) {
        errors.city = "City name is required!";
    } else if (!cityValidator.test(values.city)) {
        errors.city = "This is not a valid format! of city";
    }
    if (!values.state) {
        errors.state = "State name is required!";
    } else if (!stateValidator.test(values.state)) {
        errors.state = "This is not a valid format! of state";
    }

    const date = new Date(values.date)
    const dt = new Date()
    if(date < new Date()){ 
        errors.date = "Invalid date"
    }
    dt.setDate(date.getDate() + 30)
    if(date > dt){
        console.log('here')
        errors.date = "Invalid Date"
    }
    return errors;
};

