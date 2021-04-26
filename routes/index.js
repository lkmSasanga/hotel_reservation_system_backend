let express = require('express');
let router = express.Router();

// let Hotel = require('../models/hotelModel')

router.get('/api', function(req, res) {
    res.send("Welcome to API!");
});

// end point localhost:5000/
// router.route('/hotels').get((req, res) => {
//     Hotel.find()
//         .then(hotel => res.json(hotel))
//         .catch(err => res.status(400).json('Error: ' + err))

// })

require('./AuthRoutes')(router);
require('./CustomerRoutes')(router);
require('./HotelOwnerRoutes')(router);
require('./SystemAdminRoutes')(router);

module.exports.router = router