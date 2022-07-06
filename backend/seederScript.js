require('dotenv').config();

const servicesData = require('./data/services')
const connectDB = require('./server')
const Service = require('./models/serviceModel') 

connectDB();

const importData = async () => {
    try {
        await Service.deleteMany({});
        await Service.insertMany(servicesData);
        console.log('data import success');
        process.exit();
    } catch (error){
        console.error('error with data import');
        process.exit(1)
    }
}

importData()