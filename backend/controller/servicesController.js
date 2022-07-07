const mongoose = require('mongoose')
const Service = require('../models/serviceModel');

// get all services
const getServices = async(req, res) => {
    const services = await Service.find({})
    res.status(200).json(services);
}

// get one service
const getOneService = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No matching service'})
    }

    const service = await Service.findById(id)
    if (!service) {
        return res.status(404).json({error: 'no matching service'})
    }

    res.status(200).json(service)
}

// create a new service
const createService = async (req, res) => {
    const {name, price} = req.body;

    // add to the database
    try {
        const service = await Service.create({name, price})
        res.status(200).json(service)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a service
const deleteService = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No matching service'})
    }
    const service = await Service.findOneAndDelete({_id:id})

    if (!service) {
        return res.status(400).json({error: 'no matching service'})
    }

    res.status(200).json(service)
}

const updateService = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no matching service'})
    }
    const service = await Service.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!service){
        return res.status(400).json({error:'no matching service'})
    }
    res.status(200).json(service)
}

module.exports = {
    getServices,
    getOneService,
    createService,
    deleteService,
    updateService,
}