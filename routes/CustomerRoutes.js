module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController");

    app.get("/get_towns", [Auth, Customer], CustomerController.getTowns);
    app.get("/get_hotels", [Auth, Customer], CustomerController.getHotels);
    app.post("/add_booking", [Auth, Customer], CustomerController.addBooking);
    app.post("/make_payment", [Auth, Customer], CustomerController.makePayment);
    app.get("/get_bookings", [Auth, Customer], CustomerController.getBookings);

};