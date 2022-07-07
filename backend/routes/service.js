const express = require('express')
const {
    getServices,
    getOneService,
    createService,
    deleteService,
    updateService
} = require('../controller/servicesController')

const router = express.Router();

// @desc GET all services from db
// @route GET /api/service/services
// @access Public
router.get('/services',  getServices)

// @desc GET one servic from db
// @route GET /api/service/services/:id
// @access Public
router.get('/services/:id',  getOneService)

// @desc Create new service 
// @route POST /api/service/services
// @access Priv
router.post('/services',  createService)

// @desc Delete a service 
// @route DELETE /api/service/services/:id
// @access Priv
router.delete('/services/:id',  deleteService)

// @desc Update a service 
// @route POST /api/service/services/:id
// @access Priv
router.patch('/services/:id',  updateService)

module.exports = router;