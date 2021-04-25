module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { SystemAdmin } = require("../middleware/systemadmin");

    const SystemAdminController = require("../controllers/SystemAdminController");

    app.post("/add_town", [Auth, SystemAdmin], SystemAdminController.addTown);

};