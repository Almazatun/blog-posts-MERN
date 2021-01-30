const User = require('../models/User')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateTokken')

class UserController {
    async createUser(req, res) {
        const {userName, email, password} = req.body
        try {
            // Make sure user doesnt already exist
            const user = await User.findOne({userName}).exec() //Promise
            const userEmail = await User.findOne({email}).exec()

            //Condition to check exist or not
            if (user) {
                res.status(400).json({
                    errors: {
                        userName: 'This is userName already exist 🔒',
                        message: 'Try to use other userName'
                    }
                })
            } else if (userEmail) {
                res.status(400).json({
                    errors: {
                        userEmail: 'This is email already exist 🔒',
                        message: 'Try to use other email'
                    }
                })
            } else {
                //Create new User

                //Hashing
                const bcryptPassword = await bcrypt.hash(password, 12)

                const newUser = new User({
                    userName: userName,
                    email: email,
                    password: bcryptPassword,
                    createdAt: new Date().toISOString()
                })

                const saveUser = await newUser.save()

                res.json({
                    message: 'User created successfully 👍',
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "Some error ❌",
                errors: {...error},
            })
        }
    }

    async getUsers(req, res) {
        const users = await User.find()
        res.json(users)
    }

    async SignIn (req, res) {
        const {userName, password} = req.body

        const user = await User.findOne({userName})
        const match = await bcrypt.compare(password, user.password)

        try {
            if (!user) { // not exist
                res.status(404).json({
                    errors: {
                        message: 'User not found 👥',
                    }
                })
            } else if (!match) {
                res.status(401).json({
                    errors: {
                        error: 'Wrong credentials 🆘',
                        message: 'Please check it out your user name or password',
                    }
                })
            } else {
                const token = generateToken(user)

                res.json({
                    ...user._doc,
                    id: user._id,
                    token
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "Some error ❌",
                errors: {...error},
            })
        }

    }

    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete({_id: req.params.id})
            if (user) {
                res.json({
                    message: "User successfully deleted ✔"
                })
            } else {
                res.json({
                    message: "Sorry, User does not exist 👽"
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "Some error ❌",
                errors: {...error},
            })
        }
    }
}

module.exports = new UserController()
