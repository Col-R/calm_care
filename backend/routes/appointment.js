const express = require('express')
const Appointment = require('../models/appointmentModel')

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
router.post('/', async (req, res) => {
    const {user, description, date} = req.body;
    try {
        const appointment = await Appointment.create({user, description, date})
        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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