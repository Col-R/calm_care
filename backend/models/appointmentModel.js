const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;

// Appointment.find()

// Test by making a post request

// name
// service
// date