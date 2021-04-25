const { Booking } = require("../models/BookingModel");
const { Payment } = require("../models/PaymentModel");
const { Town } = require("../models/TownModel");
const { Hotel } = require("../models/HotelModel");


exports.getTowns = async(req, res) => {
    await Town.find(function(err, towns) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrieve towns!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received towns!",
            data: towns
        });
    });
};


exports.getHotels = async(req, res) => {
    await Hotel.find({ "city": req.params.town }, async function(err, hotel) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid city!"
            });
        }

        if (!hotel) {
            return res.status(422).json({
                success: false,
                message: "Invalid City!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Hotels received!",
            data: hotel
        });
    });
};

exports.addBooking = async(req, res) => {
    let newBooking = new Booking(req.body);

    await newBooking.save((err, booking) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to add booking!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New booking is added!",
                data: booking
            });
        }
    });
};

exports.makePayment = async(req, res) => {
    let newPayment = new Payment(req.body);

    await newPayment.save((err, payment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create payment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New payment is created!",
                data: payment
            });
        }
    });
};