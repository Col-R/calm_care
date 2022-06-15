require('dotenv').config();
const express = require('express');

// express app
const app = express();

// middleware
app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next()
})

// route
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app"})
})

// request listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// nodemon backend/server.js to check if server is up and running