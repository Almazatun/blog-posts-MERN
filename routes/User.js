const express = require('express')
const router = express.Router()
const UserController = require('../controller/User')

//Middlewares
const registerInput = require('../helpers/user/registerInput')
const signInInput = require('../helpers/user/signInInput')

//Environment variables
const signUpNewUserUrl = process.env.SIGN_UP_NEW_USER_URL || '/signUp'
const getUsersUrl = process.env.GET_USERS_URL || '/'
const deleteUserUrl = process.env.DELETE_USER_URL || 'delete'


router.post(signUpNewUserUrl, registerInput, UserController.createUser)
router.get(getUsersUrl, UserController.getUsers)
router.delete(`/${deleteUserUrl}/:id`, UserController.deleteUser)
router.post(`/signIn`,signInInput,  UserController.SignIn)

module.exports = router