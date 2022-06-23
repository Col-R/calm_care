const express = require('express')
const {
    createAppointment,
    getAppointments,
    getOneAppointment,
    deleteAppointment,
    updateAppointment
} = require('../controller/appointmentController')


const router = express.Router();

// get all appointments
router.get('/', getAppointments)

// get one appointment
router.get('/:id', getOneAppointment)

// book an appointment
router.post('/', createAppointment)

// cancel appointment
router.delete('/:id', deleteAppointment)

// reschedule an appointment
router.patch('/:id', updateAppointment)

module.exports = router;