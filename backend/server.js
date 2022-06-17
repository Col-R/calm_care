require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./routes/appointment')

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

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })

// request listener


// nodemon backend/server.js to check if server is up and running