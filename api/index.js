const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(5000, () => console.log('Server running on port 5000'))
