const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const connectDB =  require('./config/db')

//routes
const authRoutes = require('./src/routes/auth')

//Load Config
dotenv.config({path: './.env'})

const app = express()

connectDB();

// parse application/json
app.use(bodyParser.json())
app.use('/api', authRoutes)

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Ecommerce backend application."});
})

app.listen(process.env.PORT, console.log(`Server running at ${process.env.PORT}`))