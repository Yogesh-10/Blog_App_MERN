const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')

// update user
router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10)
			req.body.password = await bcrypt.hash(req.body.password, salt)
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)
			res.status(200).json(updatedUser)
		} catch (error) {
			res.status(500).json(error.message)
		}
	} else {
		res.status(401).json('Invalid account')
	}
})

// Delete
router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findById(req.params.id)
			try {
				await Post.deleteMany({ username: user.username })
				await User.findByIdAndDelete(req.params.id)
				res.status(200).json('User has been deleted')
			} catch (error) {
				res.status(500).json(error.message)
			}
		} catch (error) {
			res.status(404).json('User not found')
		}
	} else {
		res.status(401).json('Invalid account')
	}
})

// Get user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { password, ...others } = user._doc //this is to deselect password from object, because we dont want to send password to client when logged in, _doc is a field in which object returned(if user is returned, whole object is returned, so user._doc is returned- check in postman)
		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
