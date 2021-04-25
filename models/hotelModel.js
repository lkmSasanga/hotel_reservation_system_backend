const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hotelSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    hotels: {
        type: Object,
        required: true
    }
})

// items is the collection name 
const Hotel = mongoose.model('hotels', hotelSchema)

module.exports = Hotel