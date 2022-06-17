require('dotenv').config();

const express = require('express');
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

// request listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// nodemon backend/server.js to check if server is up and running