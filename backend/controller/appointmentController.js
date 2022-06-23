const Appointment = require('../models/appointmentModel')
const mongoose = require('mongoose')

// get all appointments

const getAppointments = async(req, res) => {
    const appointments = await Appointment.find({}).sort({createdAt: -1})
    res.status(200).json(appointments)
}

// get one appointment

const getOneAppointment = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No matching appointment"})
    }

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

const deleteAppointment = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No matching appointment"})
    }

    const appointment = await Appointment.findOneAndDelete({_id: id})

    if (!appointment){
        return res.status(404).json({error: 'No matching appointment'})
    }
    res.status(200).json(appointment)
}

// update appointment

const updateAppointment = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No matching appointment"})
    }

    const appointment = await Appointment.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!appointment){
        return res.status(404).json({error: 'No matching appointment'})
    }
    res.status(200).json(appointment)
}

module.exports = {
    getAppointments,
    getOneAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
}