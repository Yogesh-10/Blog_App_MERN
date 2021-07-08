const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// register user
router.post('/register', async (req, res) => {
	try {
		const { username, email, password } = req.body
		const user = await User.create({ username, email, password })
		res.status(201).json(user)
	} catch (error) {
		res.status(500).json(error.message)
	}
})

//Login user
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		!user && res.status(400).json('Wrong credentials')
		const validatePassword = await bcrypt.compare(
			req.body.password,
			user.password
		)
		!validatePassword && res.status(400).json('Wrong Credentials')

		const { password, ...others } = user._doc //this is to deselect password from object, because we dont want to send password to client when logged in, _doc is a field in which object returned(if user is returned, whole object is returned, so user._doc is returned- check in postman)
		res.status(200).json(others)
	} catch (error) {
		res.status(500).json(error.message)
	}
})

module.exports = router
