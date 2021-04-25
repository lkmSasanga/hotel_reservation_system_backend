const { Hotel } = require("../models/HotelModel");
const { Booking } = require("../models/BookingModel");

// find bookings relevent to the hotel HotelOwner
// need to add hotel owner id into booking

exports.getBookings = async(req, res) => {
    await Boking.findById({ 'hotelOwner_id': req.params.id }, async function(err, booking) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid booking id!"
            });
        }

        if (!booking) {
            return res.status(422).json({
                success: false,
                message: "Invalid booking id!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "cBookings received!",
            data: booking
        });
    });
};

exports.addHotel = async(req, res) => {
    let newHotel = new Hotel(req.body);

    await newHotel.save((err, hotel) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to add hotel!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New hotel is added!",
                data: hotel
            });
        }
    });
};