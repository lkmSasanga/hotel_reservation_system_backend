let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookingeModelSchema = new Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']
    },
    hotel: {
        type: String,
        required: true
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