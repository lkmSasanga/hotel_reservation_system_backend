module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { HotelOwner } = require("../middleware/hotelOwner");

    const HotelOwnerController = require("../controllers/HotelOwnerController");

    app.get("/api/hotel_bookings/:id", [Auth, HotelOwner], HotelOwnerController.getBookings);
    app.post("/api/add_hotel", [Auth, HotelOwner], HotelOwnerController.addHotel);
    app.post("/api/get_my_hotels", [Auth, HotelOwner], HotelOwnerController.getHotels);

};