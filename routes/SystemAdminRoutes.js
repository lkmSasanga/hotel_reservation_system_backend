module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { SystemAdmin } = require("../middleware/systemAdmin");

    const SystemAdminController = require("../controllers/SystemAdminController");

    app.post("/api/add_town", [Auth, SystemAdmin], SystemAdminController.addTown);
    app.get("/api/all_customers", [Auth, SystemAdmin], SystemAdminController.getCustomers);
    app.get("/api/all_hotel_owners", [Auth, SystemAdmin], SystemAdminController.getHotelOwners);

};