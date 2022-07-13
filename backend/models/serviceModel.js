const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Service = mongoose.model('service', serviceSchema);
module.exports = Service;