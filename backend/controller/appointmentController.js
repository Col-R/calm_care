const Appointment = require('../models/appointmentModel')

// get all appointments

const getAppointments = async(req, res) => {
    const appointments = await Appointment.find({}).sort({createdAt: -1})
    res.status(200).json(appointments)
}

// get one appointment

const getOneAppointment = async(req, res) => {
    const { id } = req.params

    const appointment = await Appointment.findById(id)

    if (!appointment){
        return res.status(404).json({error: "No matching appointment"})
    }

    res.status(200).json(appointment)
}

// book new appointment

const createAppointment = async(req, res) => {
    const {user, description, date} = req.body;

    // add to db
    try {
        const appointment = await Appointment.create({user, description, date})
        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete appointment

// update appointment

module.exports = {
    getAppointments,
    getOneAppointment,
    createAppointment
}