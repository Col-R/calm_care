require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointment')
const serviceRoutes = require('./routes/service')

connectDB();

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/appointment',appointmentRoutes)
app.use('/api/service',serviceRoutes)

// connect to DB done in config file


// request listener


// nodemon backend/server.js to check if server is up and running

module.exports = connectDB;