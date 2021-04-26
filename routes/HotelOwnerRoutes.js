module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { HotelOwner } = require("../middleware/hotelOwner");

    const HotelOwnerController = require("../controllers/HotelOwnerController");

    app.get("/api/get_bookings", [Auth, HotelOwner], HotelOwnerController.getBookings);
    app.post("api/add_hotel", [Auth, HotelOwner], HotelOwnerController.addHotel);

};