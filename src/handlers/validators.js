const emailValidator = require('email-validator');

const emailError = (email) => {
    const validator =  emailValidator.validate(email) 
    return validator ? '' : 'invalid email'
};

module.exports = (data) => {
    const errors = [];

    if(data.email){
        const error = emailError(data.email);
        error && errors.push(error)
    }

    return errors
}