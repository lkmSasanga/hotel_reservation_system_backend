let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookingeModelSchema = new Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']
    },
    hotelOwner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HotelOwner',
        required: [true, 'HotelOwner id is required!']
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: [true, 'Hotel id is required!']
    },
    checkinDate_date: {
        type: Date,
        required: true
    },
    checkoutDate_date: {
        type: Date,
        required: true
    },
    people_count: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model('Vehicle', BookingeModelSchema);
module.exports = { Booking };