const { Booking } = require("../models/BookingModel");
const { Payment } = require("../models/PaymentModel");

exports.getTowns = async(req, res) => {
    await ServiceRecord.find(function(err, serviceRecords) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrieve service records!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received service records!",
            data: serviceRecords
        });
    });
};