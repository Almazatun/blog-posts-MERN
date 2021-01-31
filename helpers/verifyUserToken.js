const authUser = require('../utils/authUser')

const verifyUserToken = (req, res, next) => {

    const {errors, userData} = authUser(req)

    /*Unless counts of errors greater then 1 or equal to one
      will be send error message of the
     */

    if (Object.keys(errors).length >= 1) {
        res.status(400).json({
            errors: errors,
            message: '👉 Bad request'
        })
    } else {
        //Create custom data is userData and pass this data to next middleware is Quotes
        req.userData = userData
        next()
    }
}

module.exports = verifyUserToken