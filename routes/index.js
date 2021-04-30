let express = require('express');
let router = express.Router();

// let Town = require('../models/TownModel');

router.get('/api', function(req, res) {
    res.send("Welcome to API!");
});

// end point localhost:5000/
// router.route('/towns').get((req, res) => {
//     Town.find()
//         .then(towns => res.json(towns))
//         .catch(err => res.status(400).json('Error: ' + err))

// })

require('./AuthRoutes')(router);
require('./CustomerRoutes')(router);
require('./HotelOwnerRoutes')(router);
require('./SystemAdminRoutes')(router);

module.exports.router = router