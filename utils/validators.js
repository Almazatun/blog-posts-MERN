const emailRegExp = require('./other/emailRegularExpressions')

const validationRules = (userName, email, password, confirmPassword) => {

    const errors = {}
    //userName
    if (userName.trim() === '') {
        errors.username = 'Username must not be empty 🤬';
    }
    //email
    if (!email) {
        errors.email = 'Email can not be empty 🤬';
    } else if (!emailRegExp.test(email)) {
        errors.email = 'Invalid email address 🤡';
    }
    //password
    if (!password) {
        errors.password = 'Password can not be empty 🤬'
    } else if (password.length < 6) {
        errors.password = "Password must be 6 characters or more 🤬"
    }
    //confirmPassword
    if (!confirmPassword) {
        errors.confirmPassword = 'Confirm password can not be empty 🤬'
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password do not math 💥'
    }


    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

const validationRulesSignIn = (userName, password) => {
    const errors = {}
    //userName
    if (userName.trim() === '') {
        errors.userName = 'User name can not be empty 🤬'
    }
    //password
    if (!password) {
        errors.password = 'Password can not be empty 🤬'
    }

    return {

        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports = {
    validationRules,
    validationRulesSignIn
}