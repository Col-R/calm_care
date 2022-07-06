const express = require('express')
const router = express.Router();

const {
    getServices,
} = require('../controller/servicesController')

// @desc GET all products from db
// @route GET /api/products
// @access Public
router.get('/',  getServices)

module.exports = router;