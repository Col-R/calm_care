require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointment')
const serviceRoutes = require('./routes/service')
const path = require('path')

connectDB();

// express app
const app = express();

const PORT = process.env.PORT || 5000;


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

// serve build folder if in production
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    })
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))