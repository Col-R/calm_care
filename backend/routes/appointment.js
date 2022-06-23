const express = require('express')
const {
    createAppointment,
    getAppointments,
    getOneAppointment
} = require('../controller/appointmentController')


const router = express.Router();

// get all appointments
router.get('/', getAppointments)

// get one appointment
router.get('/:id', getOneAppointment)

// book an appointment
router.post('/', createAppointment)

// cancel appointment
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'delete appointment'})
})

// reschedule an appointment
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE an appointment'})
})

module.exports = router;