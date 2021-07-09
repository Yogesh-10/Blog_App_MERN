const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const multer = require('multer')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const categoryRoutes = require('./routes/categoriesRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, '/images')))

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'image')
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name)
	},
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/categories', categoryRoutes)

app.listen(5000, () => console.log('Server running on port 5000'))
