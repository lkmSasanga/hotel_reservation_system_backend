module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { SystemAdmin } = require("../middleware/systemAdmin");

    const SystemAdminController = require("../controllers/SystemAdminController");

    app.post("/api/add_town", [Auth, SystemAdmin], SystemAdminController.addTown);

};