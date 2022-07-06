const Service = require('../models/serviceModel');

// get all services
const getServices = async(req, res) => {
    const services = await Service.find({})
    res.status(200).json(services);
}

module.exports = {getServices}