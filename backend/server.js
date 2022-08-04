require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointment')
const serviceRoutes = require('./routes/service')

connectDB();

// express app
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

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

// for deployment
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
}