const express = require('express')

const router = express.Router();

// get all appointments
router.get('/', (req, res) => {
    res.json({mssg: 'get all appointments'})
})

// get one appointment
router.get('/:id', (req, res) =>{
    res.json({mssg: 'get single appointment'})
})

// book an appointment
router.post('/', (req, res) =>{
    res.json({mssg: 'post new appointment'})
})

// cancel appointment
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'delete appointment'})
})

// reschedule an appointment
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE an appointment'})
})

module.exports = router;